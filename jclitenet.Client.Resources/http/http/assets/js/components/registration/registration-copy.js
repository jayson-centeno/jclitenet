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
define(["require", "exports", 'react', "models/RegistrationModel", 'react-router', 'actions/register', 'redux-form', 'validations/registerValidation'], function (require, exports, React, RegistrationModel_1, react_router_1, register_1, redux_form_1, registerValidation_1) {
    "use strict";
    var Registration = (function (_super) {
        __extends(Registration, _super);
        function Registration(props) {
            _super.call(this, props);
            this.setDefaultState();
            this.bindHandlers();
        }
        Registration.prototype.componentWillMount = function () {
        };
        Registration.prototype.setDefaultState = function () {
            this.state = {
                isRegistered: false,
                model: new RegistrationModel_1.default()
            };
        };
        Registration.prototype.bindHandlers = function () {
            this.handleRegister = this.handleRegister.bind(this);
            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handleUserNameChange = this.handleUserNameChange.bind(this);
            this.handlePasswordChange = this.handlePasswordChange.bind(this);
            this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        };
        Registration.prototype.handleEmailChange = function (e) {
            this.state.model.email = e.target.value;
            this.updateState(this.state);
        };
        Registration.prototype.handleUserNameChange = function (e) {
            this.state.model.userName = e.target.value;
            this.updateState(this.state);
        };
        Registration.prototype.handlePasswordChange = function (e) {
            this.state.model.password = e.target.value;
            this.updateState(this.state);
        };
        Registration.prototype.handleConfirmPasswordChange = function (e) {
            this.state.model.confirmPassword = e.target.value;
            this.updateState(this.state);
        };
        Registration.prototype.handleRegister = function (e) {
            e.preventDefault();
            var dataPost = this.state.model;
            this.props.onRegister(dataPost);
        };
        Registration.prototype.updateState = function (newState) {
            this.setState({
                model: newState.model,
                isRegistered: newState.isRegistered
            });
        };
        //when a component is receiving new props
        Registration.prototype.componentWillReceiveProps = function (nextProps) {
            this.updateState({
                model: nextProps.model,
                isRegistered: nextProps.isRegistered
            });
            //this.context.router.push('/')
        };
        Registration.prototype.render = function () {
            var _a = this.props, _b = _a.fields, email = _b.email, username = _b.username, password = _b.password, confirmPassword = _b.confirmPassword, handleSubmit = _a.handleSubmit, resetForm = _a.resetForm, submitting = _a.submitting;
            return (React.createElement("form", {name: "form", role: "form", onSubmit: this.handleRegister}, React.createElement("div", {className: "login box centered"}, React.createElement("div", {className: "form-horizontal"}, React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("input", React.__spread({type: "text"}, email, {className: "form-control", placeholder: "Email Address"})), email.touched && email.error &&
                React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, email.error)))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("input", React.__spread({type: "text"}, username, {className: "form-control", placeholder: "User Name"})), React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, "User Name is Invalid")), React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, "User Name is Required")))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("input", React.__spread({type: "password"}, password, {className: "form-control", placeholder: "Password"})), React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, "Password is required")))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("input", React.__spread({type: "password"}, confirmPassword, {className: "form-control", placeholder: "Confirm Password"})), React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, "Confirm Password is required")))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("button", {type: "submit", disabled: submitting, className: "btn btn-success spacer"}, "Register"))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement(react_router_1.Link, {to: "/"}, "Login")))))));
        };
        Registration.contextTypes = {
            router: React.PropTypes.func.isRequired
        };
        Registration.propTypes = {
            fields: React.PropTypes.object.isRequired,
            submitting: React.PropTypes.bool.isRequired,
            handleSubmit: React.PropTypes.func.isRequired
        };
        return Registration;
    }(React.Component));
    //(state) is global state
    var mapStateToProps = function (state) {
        return {
            model: state.register.model,
            isRegistered: state.register.isRegistered,
            Registration: state.form.Registration
        };
    };
    var mapDispatchToProps = function (dispatch) {
        return {
            onRegister: function (model) { return dispatch(register_1.default(model)); }
        };
    };
    var fields = ['email', 'username', 'password', 'confirmPassword'];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = redux_form_1.reduxForm({
        form: 'Registration',
        fields: fields,
        validate: registerValidation_1.default
    }, mapStateToProps, mapDispatchToProps)(Registration);
});
