/// <reference path="../interfaces/interfaces.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/require/require.d.ts" />
define(["require", "exports", 'constants/constants'], function (require, exports, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = function () {
        return {
            type: constants_1.AUTH_CONSTANTS.LOGIN
        };
    };
});
