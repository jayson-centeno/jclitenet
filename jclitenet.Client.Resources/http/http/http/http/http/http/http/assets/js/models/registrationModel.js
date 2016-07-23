define(["require", "exports"], function (require, exports) {
    "use strict";
    var RegistrationModel = (function () {
        function RegistrationModel() {
            this.email = '';
            this.userName = '';
            this.password = '';
            this.confirmPassword = '';
        }
        return RegistrationModel;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = RegistrationModel;
});
