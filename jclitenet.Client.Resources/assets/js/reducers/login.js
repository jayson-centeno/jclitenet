/// <reference path="../typings/lib.es6.d.ts" />
define(["require", "exports", 'constants/constants'], function (require, exports, constants_1) {
    "use strict";
    var initialState = {
        isAuthenticated: false
    };
    function login(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case constants_1.AUTH_CONSTANTS.LOGIN:
                {
                    return Object.assign({}, state, {
                        isAuthenticated: true
                    });
                }
            default:
                return state;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = login;
});
