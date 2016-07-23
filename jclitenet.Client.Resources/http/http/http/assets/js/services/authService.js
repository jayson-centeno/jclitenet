/// <reference path="../interfaces/services.d.ts" />
/// <reference path="../typings/q/q.d.ts" />
define(["require", "exports", 'q'], function (require, exports, Q) {
    "use strict";
    var AuthService = (function () {
        function AuthService() {
        }
        AuthService.prototype.isAuthenticated = function () {
            return true;
        };
        AuthService.prototype.Authenticate = function (email, password) {
            var defer = Q.defer();
            setTimeout(function () {
                defer.resolve(null);
            }, 1000);
            return defer.promise;
        };
        AuthService.prototype.Register = function (model) {
            var defer = Q.defer();
            setTimeout(function () {
                defer.resolve(null);
            }, 1000);
            return defer.promise;
        };
        return AuthService;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = AuthService;
});
