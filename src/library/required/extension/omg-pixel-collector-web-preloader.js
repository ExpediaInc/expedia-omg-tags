(function ($, omg) {
    // Tag Pixel: omg.pixel.fireTagPixel({id: 1402, name: 'facebook'});
    var OMG_PIXEL_ID = 'omgpixel';
    var COLLECTOR_WEB_TEST = '//collector.test.expedia.com';
    var COLLECTOR_WEB_PROD = '//collector.prod.expedia.com';
    var BATCH_WAIT_TIME_IN_MS = 1000;
    var TAG_LOGGING = 'omgmarketingpixel';

    var b = b || utag_data;

    if (!('object' == typeof b && 'object' == typeof omg && 'function' == typeof omg.isJQueryPresent && omg.isJQueryPresent())) {
        console.warn('utag_data/b available?', b, 'omg available?', omg, 'jquery available?', omg.isJQueryPresent());
        return;
    }

    var log = omg.LogFactory.createLogger('omgpixel-collector-web');
    var callback = $.Callbacks();
    var dataLoggingCallBack = $.Callbacks();
    callback.add(batchedCallbackHandler);
    dataLoggingCallBack.add(batchedCallbackHandlerForDataMapping);
    var tagPixelBatchedPayload = [];
    var dataMappingPixelBatchedPayload = [];
    var pixelTagTimeout = undefined;
    var dataMappingPixelTagTimeout = undefined;

    omg.pixel = {
        fireTagPixel: function (tagInfo) {
            if (!isEnabled()) {
                log.info('omgpixel fire is disabled, tag=', tagInfo);
                return;
            }
            if (pixelTagTimeout === undefined) {
                pixelTagTimeout = setTimeout(function () {
                    callback.fire(OMG_PIXEL_ID);
                    pixelTagTimeout = undefined;
                }, BATCH_WAIT_TIME_IN_MS);
            }
            addTagPixelPayload(OMG_PIXEL_ID, tagInfo, tagPixelBatchedPayload);
        },
        fireTagAndLogPixel: function (tagInfo) {
            if (!isEnabled()) {
                log.info('omgmarketingpixel fire is disabled, tag=', tagInfo);
                return;
            }
            if (dataMappingPixelTagTimeout === undefined) {
                dataMappingPixelTagTimeout = setTimeout(function () {
                    dataLoggingCallBack.fire(TAG_LOGGING);
                    dataMappingPixelTagTimeout = undefined;
                }, BATCH_WAIT_TIME_IN_MS);
            }
            addTagPixelPayload(TAG_LOGGING, tagInfo, dataMappingPixelBatchedPayload);
        }
    };
    
    omg.udo = {
        logFlattenedUdo: function() {
            var tagLoggingConfig = {
                "stream":!omg.isProd(),
                "persist":true
            }
            var collectorWebResourceURL = getCollectorWebResource("omg-udo", tagLoggingConfig);
            if(window.utag_data) {
                var payload = JSON.stringify(utag_data);
                $.ajax({
                    type: "POST",
                    url: collectorWebResourceURL,
                    data: payload,
                    contentType: "text/plain; charset=utf-8",
                    crossDomain: true
                }).done(function () {
                    // log.debug('post to collector-web success. args=', arguments);
                }).fail(function () {
                    log.warn('post to collector-web failed. args=', arguments);
                });
            }
        }
        
    };

    function  batchedCallbackHandlerForDataMapping(messageId){
        var tagLoggingConfig = {
            "stream":!omg.isProd(),
            "persist":true
        }
        var collectorWebResourceURL = getCollectorWebResource(messageId, tagLoggingConfig);
        var items = dataMappingPixelBatchedPayload.splice(0, dataMappingPixelBatchedPayload.length);
        if (items.length <= 0) {
            log.debug('No payload to publish to collector-web');
            return;
        }
        var payload = JSON.stringify(items);
        $.ajax({
            type: "POST",
            url: collectorWebResourceURL,
            data: payload,
            contentType: "text/plain; charset=utf-8",
            crossDomain: true
        }).done(function () {
            // log.debug('post to collector-web success. args=', arguments);
        }).fail(function () {
            log.warn('post to collector-web failed. args=', arguments);
        });
    }
    function batchedCallbackHandler(messageId) {
        var tagLoggingConfig = {
            "stream":true,
            "persist":false
        }
        var collectorWebResourceURL = getCollectorWebResource(messageId, tagLoggingConfig);
        var items = tagPixelBatchedPayload.splice(0, tagPixelBatchedPayload.length);
        if (items.length <= 0) {
            log.debug('No payload to publish to collector-web');
            return;
        }
        var payload = JSON.stringify(items);
        $.ajax({
            type: "POST",
            url: collectorWebResourceURL,
            data: payload,
            contentType: "text/plain; charset=utf-8",
            crossDomain: true
        }).done(function () {
            // log.debug('post to collector-web success. args=', arguments);
        }).fail(function () {
            log.warn('post to collector-web failed. args=', arguments);
        });
    }

    function isEnabled() {
        // Each profile can override this at the pre-loader level
        // OMGPIXEL_ENABLED = true;  // enable at the profile level
        if ('boolean' === typeof OMGPIXEL_ENABLED) {
            return OMGPIXEL_ENABLED;
        }
        return false;
    }

    function addTagPixelPayload(messageId, tagInfo, payLoad) {
        if (!isValidMessage(messageId, tagInfo)) {
            log.debug('Not a tealium omgpixel message.  message=', arguments);
            return;
        }
        payLoad.push(createLogPixelPayload(tagInfo));
    }

    function isValidMessage(messageId, tagInfo) {
        return 'string' === typeof messageId && messageId.trim().length > 0 && isValidTagInfo(tagInfo);
        function isValidTagInfo(tagInfo) {
            return 'object' === typeof tagInfo && !isNaN(parseInt(tagInfo.id)) && 'string' === typeof tagInfo.name;
        }
    }

    function getCollectorWebResource(messageType, tagLoggingConfig) {
        var base = omg.isProd() ? COLLECTOR_WEB_PROD : COLLECTOR_WEB_TEST;
        base += "/" + messageType + ".json?batch=true";
        for (var key in tagLoggingConfig) {
            base += "&" +key + '=' + tagLoggingConfig[key];
        }
        return base;
    }

    function createLogPixelPayload(tagInfo) {
        var siteId, siteName;
        if (b.context && b.context.site) {
            siteId = b.context.site.siteId || -1;
        }
        if (b.context && b.context.site) {
            siteName = b.context.site.siteName;
        }

        var pageName, lob, xlob, funnelLocation;
        if (b.pageInfo) {
            pageName = b.pageInfo.pageName || '';
            lob = b.pageInfo.lineOfBusiness || '';
            xlob = b.pageInfo.xLineOfBusiness || '';
            funnelLocation = b.pageInfo.funnelLocation || '';
        }
        var tagUID, tagName, dataMapping = '';
        if ('undefined' != typeof tagInfo) {
            tagUID = parseInt(tagInfo.id) || -1;
            tagName = tagInfo.name || '';

            if ('undefined' != typeof tagInfo.dataMapping) {
                dataMapping = tagInfo.dataMapping;
            }
        }

        return {
            "source": "tealium",
            "utcTimestamp": b.utcTimestamp,
            "tealium": {
                "profile": omg.getProfileName(),
                "env": omg.getEnv()
            },
            "site": {
                "id": siteId,
                "name": siteName
            },
            "page": {
                "name": pageName,
                "lob": lob,
                "xlob": xlob,
                "funnelLocation": funnelLocation
            },
            "tag": {
                "id": tagUID,
                "name": tagName,
                "dataMapping" : dataMapping
            }
        };
    }

})(jQuery, omg);