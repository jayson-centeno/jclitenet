/// <reference path="../typings/lib.es6.d.ts" />
define(["require", "exports", 'models/registrationModel', 'constants/constants'], function (require, exports, registrationModel_1, constants_1) {
    "use strict";
    var initialState = {
        model: new registrationModel_1.default(),
        isRegistered: false,
    };
    function register(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case constants_1.REGISTER_CONSTANTS.REGISTER:
                {
                    return Object.assign({}, state, {
                        isRegistered: true
                    });
                }
            default:
                return state;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = register;
});
