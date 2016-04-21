define(["require", "exports", 'redux', "reducers/register"], function (require, exports, redux_1, register_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = redux_1.combineReducers({
        register: register_1.default
    });
});
