(function ($, omg) {
    // Tag Pixel: omg.pixel.fireTagPixel({id: 1402, name: 'facebook', label: 'Facebook', context: { u. u, b. b} });
    var OMG_PIXEL_ID = 'omgpixel';
    var COLLECTOR_WEB_TEST = 'https://collector.test.expedia.com';
    var COLLECTOR_WEB_PROD = 'https://collector.prod.expedia.com';
    var BATCH_WAIT_TIME_IN_MS = 1000;

    var pixelfired = {};

    if (!('object' == typeof omg && 'function' == typeof omg.isJQueryPresent && omg.isJQueryPresent())) {
        console.warn('omg available?', omg, 'jquery available?', omg.isJQueryPresent());
        return;
    }

    var log = omg.LogFactory.createLogger('omgpixel-collector-web');
    var tagPixelBatchedPayload = [];
    var pixelTagTimeout = undefined;

    omg.pixel = {
        fireTagPixel: function (tagInfo, optionalMappingHandler) {
            dataForTagAlerting(tagInfo, pixelfired);
            if (!isEnabled()) {
                log.info('omgpixel fire is disabled, tag=', tagInfo);
                return;
            }
            if (pixelTagTimeout === undefined) {
                pixelTagTimeout = setTimeout(function () {
                        sendPayloadToCollectorWeb(OMG_PIXEL_ID);
                    pixelTagTimeout = undefined;
                }, BATCH_WAIT_TIME_IN_MS);
            }
            addTagPixelPayload(OMG_PIXEL_ID, tagInfo, tagPixelBatchedPayload, optionalMappingHandler);
        }
    };

    omg.udo = {
        logFlattenedUdo: function () {
            var tagLoggingConfig = {
                "stream": omg.isProd(),
                "persist": true
            };
            var collectorWebResourceURL = getCollectorWebResource("omg-udo", tagLoggingConfig);
            if (window.utag_data) {
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

    function sendPayloadToCollectorWeb(messageId) {
        var tagLoggingConfig = {
            "stream": true,
            "persist": true,
            "batch": true
        };
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

    function addTagPixelPayload(messageId, tagInfo, payLoad, optionalMappingHandler) {
        if (!isValidMessage(messageId, tagInfo)) {
            log.debug('Not a tealium omgpixel message.  message=', arguments);
            return;
        }
        payLoad.push(createLogPixelPayload(tagInfo, optionalMappingHandler));
    }

    function isValidMessage(messageId, tagInfo) {
        return 'string' === typeof messageId && messageId.trim().length > 0 && isValidTagInfo(tagInfo);
        function isValidTagInfo(tagInfo) {
            return 'object' === typeof tagInfo && !isNaN(parseInt(tagInfo.id)) && 'string' === typeof tagInfo.name;
        }
    }

    function getCollectorWebResource(messageType, tagLoggingConfig) {
        var base = omg.isProd() ? COLLECTOR_WEB_PROD : COLLECTOR_WEB_TEST;
        base += "/" + messageType + ".json?";
        for (var key in tagLoggingConfig) {
            base += key + '=' + tagLoggingConfig[key] + "&";
        }
        return base;
    }

    function dataForTagAlerting(tagInfo, pixelfired){
        if(typeof tagInfo.name !== "undefined" && window.utag_data){
            pixelfired[tagInfo.name.split("-").join("")]=true;
            window.utag_data.pixelfired = pixelfired;
        }
    }

    /**
     * @param tagInfo <pre>{ id: uid, name: 'unique-tag-name', label: 'tag friendly name', context: { u: tag-sender, b: utag-data } }</pre>
     * @param optionalCustomMappingHandler Optional <pre>function(context, defaultMappingHandler) { }</pre>
     */
    function createLogPixelPayload(tagInfo, optionalCustomMappingHandler) {
        var dateInMilli = new Date().getTime();
        var payload = {
            source: "tealium",
            utcTimestamp: dateInMilli,
            tealium: {
                profile: omg.getProfileName(),
                env: omg.getEnv()
            },
            site: {},
            page: {},
            tag: {},
            guid: {},
            trl: {}
        };

        payload.tag = createTag(tagInfo, optionalCustomMappingHandler);
        if ('undefined' !== typeof tagInfo && 'undefined' !== typeof tagInfo.context && 'undefined' !== typeof tagInfo.context.b) {
            var udo = tagInfo.context.b;
            payload.guid = udo.guid;
            payload.utcTimestamp = udo.utcTimestamp || dateInMilli;
            payload.site = createSite(udo);
            if ('undefined' !== typeof udo.pageInfo) {
                payload.page = createPage(udo.pageInfo);
                payload.trl = populateTRLForConfirmationPage(udo);
            }
        }
        log.debug(payload.tag.name + ':', JSON.stringify(payload));
        return payload;
    }

    function createSite(udo) {
        var site = {id: "", name: "", brand: ""};
        site.brand = udo.SiteBrand || '';
        if ('undefined' === typeof udo.context || 'undefined' === typeof udo.context.site) {
            return site;
        }
        site.id = udo.context.site.siteId || -1;
        site.name = udo.context.site.siteName || '';
        return site;
    }

    function createPage(pageInfo) {
        var page = {name: "", lob: "", xlob: "", funnelLocation: ""};
        page.name = pageInfo.pageName || '';
        page.lob = pageInfo.lineOfBusiness || '';
        page.xlob = pageInfo.xLineOfBusiness || '';
        page.funnelLocation = pageInfo.funnelLocation || '';
        return page;
    }

    function createTag(tagInfo, optionalCustomMappingHandler) {
        var tag = {id: -1, name: "", label: "", dataMapping: {}};
        if ('undefined' === typeof tagInfo) {
            return tag;
        }
        tag.id = parseInt(tagInfo.id) || -1;
        tag.name = tagInfo.name || '';
        tag.label = tagInfo.label || '';
        if ('undefined' === typeof tagInfo.context) {
            return tag;
        }
        if ('function' === typeof optionalCustomMappingHandler) {
            tag.dataMapping = optionalCustomMappingHandler(tagInfo.context, defaultMappingHandler)
        } else {
            tag.dataMapping = defaultMappingHandler(tagInfo.context);
        }
        return tag;
    }

    function populateTRLForConfirmationPage(udo) {
        var trl = '';
        var pageName = udo.pageInfo.pageName;
        if (pageName.indexOf("Checkout.Confirmation") > -1) {
            trl = udo.entity.checkout.trl;
        }
        return trl;
    }

    /**
     * @param context <pre>{ u: tag-sender, b: utag-data }</pre>
     */
    function defaultMappingHandler(context) {
        var dataMapping = {};
        if ('undefined' === typeof context || 'undefined' === typeof context.u || 'undefined' === typeof context.u.map || 'undefined' === typeof context.b) {
            return {};
        }
        var keys_arr = Object.keys(context.u.map);
        for (var i = 0; i < keys_arr.length; i++) {
            var k = keys_arr[i];
            var keyDedotted = deDot(k);
            if ('undefined' !== typeof keyDedotted) {
                dataMapping[keyDedotted] = decodeURIComponent(context.b[k]) || '';
            }
        }

        function deDot(key) {
            if ('string' !== typeof key) {
                return undefined;
            }
            return key.replace(/\./g, "");
        }

        return dataMapping;
    }

})(jQuery, omg);