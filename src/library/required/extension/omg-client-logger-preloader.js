(function (omg) {
    omg = omg || {};

    var CLIENT_ERROR_LABEL = 'omg.utag.client-error';
    var POST_MESSAGE_COMMAND = 'client-log-error';
    var SAFEFRAMES = 'safeframes';

    var SafeFramesClientLogger = function () {};
    SafeFramesClientLogger.prototype = {
        logError: function (error, additionalData) {
            if ('undefined' === typeof top || 'undefined' === top.postMessage) {
                return;
            }
            additionalData = additionalData || [];
            additionalData.push(SAFEFRAMES + '=true');
            var errorMessage = this.createSafeframesMessage(error, additionalData);
            var sourceUrl = '';
            if ('undefined' !== typeof utag_data && 'undefined' !== typeof utag_data.parenturl) {
                sourceUrl = utag_data.parenturl;
            }
            top.postMessage('cmd=' + POST_MESSAGE_COMMAND + '&value=' + JSON.stringify(errorMessage), sourceUrl);
        },
        /**
         * @param error Javascript error object
         * @param additionalData
         * @returns {{label: string, message: string, fileName: string, stack: string, additionalData: *}}
         */
        createSafeframesMessage: function(error, additionalData) {
            var msg = {
                label: CLIENT_ERROR_LABEL,
                message: "",
                fileName: "",
                stack: "",
                additionalData: additionalData
            };
            msg.message = error.message;
            msg.fileName = getSource(error);
            msg.stack = parseStack(error).join(", ");
            return msg;
        }
    };

    var DctkClientLogger = function () {};
    DctkClientLogger.prototype = {
        logError: function (error, additionalData) {
            additionalData = additionalData || [];
            additionalData.push(SAFEFRAMES + '=false');
            error.fileName = getSource(error);
            error.stack = parseStack(error).join(", ");
            dctk.logging.logError(CLIENT_ERROR_LABEL, error, additionalData);
        }
    };

    var NoOpClientLogger = function () {};
    NoOpClientLogger.prototype = {
        logError: function (error, additionalData) {
            if (omg.isDev()) {
                console.error(CLIENT_ERROR_LABEL + ':',  error, 'additionalData:', additionalData || []);
            }
        }
    };

    /**
     * @param error Javascript error Object
     * @returns The page source or the entire stack string.
     */
    function getSource(error) {
        if ('string' === typeof error.stack) {
            var stackArr = error.stack.split(/[\r\n]+/g);
            if (stackArr.length > 1) {
                return stackArr[1].replace(/at/gi, '').trim().split('?')[0];
            }
        }
        return error.stack;
    }

    function parseStack(error) {
        var stack = [];
        if ('string' === typeof error.stack) {
            var stackArr = error.stack.split(/[\r\n]+/g);
            for (var i = 0; i < stackArr.length; i++) {
                stack.push(stackArr[i].trim());
            }
        }
        return stack;
    }

    function createClientLogger() {
        if (isDctkErrorLoggingAvailable()) {
            return new DctkClientLogger();
        } else if (isSafeFramesAvailable()) {
            return new SafeFramesClientLogger();
        }
        return new NoOpClientLogger();
    }

    function isDctkErrorLoggingAvailable() {
        return 'undefined' !== typeof dctk && 'undefined' !== typeof dctk.logging && 'undefined' !== typeof dctk.logging.logError;
    }

    function isSafeFramesAvailable() {
        return 'sf_body' === document.body.id;
    }

    omg.clientLogger = createClientLogger();
})(omg);