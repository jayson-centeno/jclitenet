/// <reference path="../typings/redux-form/redux-form.d.ts" />
define(["require", "exports", 'redux', "reducers/register", 'redux-form'], function (require, exports, redux_1, register_1, redux_form_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = redux_1.combineReducers({
        register: register_1.default,
        form: redux_form_1.reducer
    });
});
