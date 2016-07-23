define(["require", "exports"], function (require, exports) {
    "use strict";
    function validateRegister(data, props) {
        var errors = {};
        if (!data.email)
            errors.email = 'Required';
        if (!data.username)
            errors.username = 'Required';
        if (!data.password)
            errors.password = 'Required';
        if (data.confirmPassword &&
            data.password &&
            data.confirmPassword != data.password) {
            errors.confirmPassword = 'Password must be the same';
        }
        return errors;
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = validateRegister;
});
