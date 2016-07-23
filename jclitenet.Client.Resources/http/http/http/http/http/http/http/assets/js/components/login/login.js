/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
/// <reference path="../../typings/redux/redux.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 'redux', 'actions/login', 'reducers/login', 'react-router'], function (require, exports, React, redux_1, login_1, login_2, react_router_1) {
    "use strict";
    var Login = (function (_super) {
        __extends(Login, _super);
        function Login(props) {
            _super.call(this, props);
            this.state = {
                isAuthenticated: false
            };
        }
        Login.prototype.handleLogin = function (event) {
            var _this = this;
            var store = redux_1.createStore(login_2.default);
            store.subscribe(function () { return _this.setState({
                isAuthenticated: store.getState().isAuthenticated
            }); });
            store.dispatch(login_1.default());
        };
        Login.prototype.render = function () {
            return (React.createElement("form", {name: "form", role: "form", novalidate: true}, React.createElement("div", {className: "login box centered"}, React.createElement("div", {className: "form-horizontal"}, React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("input", {type: "text", name: "email", className: "form-control", placeholder: "Email Address"}), React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, "Email is Invalid")), React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, "Email is Required")))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("input", {type: "text", name: "password", className: "form-control", placeholder: "Password"}), React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, "Password is required")))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("button", {type: "button", onClick: this.handleLogin.bind(this), className: "btn btn-success spacer"}, "Login"))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement(react_router_1.Link, {to: '/register'}, "Register")))))));
        };
        return Login;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Login;
});
