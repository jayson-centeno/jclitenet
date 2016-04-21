/// <reference path="../interfaces/services.d.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var AuthService = (function () {
        function AuthService() {
        }
        AuthService.prototype.isAuthenticated = function () {
            return true;
        };
        AuthService.prototype.Authenticate = function (email, password) {
            return true;
        };
        return AuthService;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = AuthService;
});
