/// <reference path="../../typings/redux/redux.d.ts" />
/// <reference path="../../typings/react-router/react-router.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/react-redux/react-redux.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 'react-redux', "models/RegistrationModel", 'react-router', 'actions/register'], function (require, exports, React, react_redux_1, RegistrationModel_1, react_router_1, register_1) {
    "use strict";
    var Registration = (function (_super) {
        __extends(Registration, _super);
        function Registration(props) {
            _super.call(this, props);
            this.setDefaultState();
            this.bindHandlers();
        }
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
            console.log(this.state.isRegistered);
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
            this.context.router.push('/');
        };
        Registration.prototype.render = function () {
            return (React.createElement("div", {name: "form", role: "form"}, React.createElement("div", {className: "login box centered"}, React.createElement("div", {className: "form-horizontal"}, React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("input", {type: "text", name: "email", onChange: this.handleEmailChange, value: this.state.model.email, className: "form-control", placeholder: "Email Address"}), React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, "Email is Invalid")), React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, "Email is Required")))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("input", {type: "text", name: "UserName", onChange: this.handleUserNameChange, value: this.state.model.userName, className: "form-control", placeholder: "User Name"}), React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, "User Name is Invalid")), React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, "User Name is Required")))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("input", {type: "password", name: "password", onChange: this.handlePasswordChange, value: this.state.model.password, className: "form-control", placeholder: "Password"}), React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, "Password is required")))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("input", {type: "password", name: "password", onChange: this.handleConfirmPasswordChange, value: this.state.model.confirmPassword, className: "form-control", placeholder: "Confirm Password"}), React.createElement("div", {className: "error", role: "alert"}, React.createElement("div", null, "Confirm Password is required")))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement("button", {type: "button", onClick: this.handleRegister, className: "btn btn-success spacer"}, "Register"))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "col-sm-12"}, React.createElement(react_router_1.Link, {to: "/"}, "Login")))))));
        };
        Registration.contextTypes = {
            router: React.PropTypes.func.isRequired
        };
        return Registration;
    }(React.Component));
    //(state) is global state
    var mapStateToProps = function (state) {
        return {
            model: state.register.model,
            isRegistered: state.register.isRegistered
        };
    };
    var mapDispatchToProps = function (dispatch) {
        return {
            onRegister: function (model) { return dispatch(register_1.default(model)); }
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Registration);
});
