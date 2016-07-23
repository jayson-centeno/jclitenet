/// <reference path="../../typings/redux/redux.d.ts" />
/// <reference path="../../typings/react-router/react-router.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/react-redux/react-redux.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/redux-form/redux-form.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 'react-router', 'redux-form', 'validations/registerValidation'], function (require, exports, React, react_router_1, redux_form_1, registerValidation_1) {
    "use strict";
    var RegistrationForm = (function (_super) {
        __extends(RegistrationForm, _super);
        function RegistrationForm(props) {
            _super.call(this, props);
        }
        RegistrationForm.prototype.render = function () {
            var _a = this.props, _b = _a.fields, email = _b.email, username = _b.username, password = _b.password, confirmPassword = _b.confirmPassword, handleSubmit = _a.handleSubmit, resetForm = _a.resetForm, submitting = _a.submitting, valid = _a.valid;
            return (React.createElement("form", {name: "form", role: "form", onSubmit: this.props.handleSubmit}, React.createElement("div", {className: "login box centered"}, React.createElement("div", {className: "form-horizontal"}, React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("input", React.__spread({type: "text"}, email, {className: "form-control", placeholder: "Email Address"})), email.touched && email.error &&
                React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, email.error)))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("input", React.__spread({type: "text"}, username, {className: "form-control", placeholder: "User Name"})), username.touched && username.error &&
                React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, username.error)))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("input", React.__spread({type: "password"}, password, {className: "form-control", placeholder: "Password"})), password.touched && password.error &&
                React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, password.error)))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("input", React.__spread({type: "password"}, confirmPassword, {className: "form-control", placeholder: "Confirm Password"})), confirmPassword.touched && confirmPassword.error &&
                React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, confirmPassword.error)))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("button", {type: "submit", disabled: submitting, className: "btn btn-success spacer"}, submitting ? React.createElement("span", {className: "fa fa-spinner fa-spin"}) : 'Register'))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement(react_router_1.Link, {to: "/"}, "Login")))))));
        };
        return RegistrationForm;
    }(React.Component));
    var fields = ['email', 'username', 'password', 'confirmPassword'];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = redux_form_1.reduxForm({
        form: 'registrationForm',
        fields: fields,
        validate: registerValidation_1.default
    })(RegistrationForm);
});
