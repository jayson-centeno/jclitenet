define(["require", "exports"], function (require, exports) {
    "use strict";
    var AUTH_CONSTANTS = (function () {
        function AUTH_CONSTANTS() {
        }
        Object.defineProperty(AUTH_CONSTANTS, "LOGIN", {
            get: function () { return 'login'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AUTH_CONSTANTS, "AUTH_SET_TOKEN", {
            get: function () { return 'AUTH_SET_TOKEN'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AUTH_CONSTANTS, "AUTH_REMOVE_TOKEN", {
            get: function () { return 'AUTH_REMOVE_TOKEN'; },
            enumerable: true,
            configurable: true
        });
        return AUTH_CONSTANTS;
    }());
    exports.AUTH_CONSTANTS = AUTH_CONSTANTS;
    var REGISTER_CONSTANTS = (function () {
        function REGISTER_CONSTANTS() {
        }
        Object.defineProperty(REGISTER_CONSTANTS, "REGISTER", {
            get: function () { return 'REGISTER'; },
            enumerable: true,
            configurable: true
        });
        return REGISTER_CONSTANTS;
    }());
    exports.REGISTER_CONSTANTS = REGISTER_CONSTANTS;
});
