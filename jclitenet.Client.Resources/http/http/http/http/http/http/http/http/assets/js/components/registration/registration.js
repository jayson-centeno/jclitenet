/// <reference path="../../typings/redux/redux.d.ts" />
/// <reference path="../../typings/react-router/react-router.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/react-redux/react-redux.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/redux-form/redux-form.d.ts" />
/// <reference path="../../typings/q/q.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 'components/registration/registrationForm', 'actions/register', "models/RegistrationModel", 'react-redux', 'redux-form'], function (require, exports, React, registrationForm_1, register_1, RegistrationModel_1, react_redux_1, redux_form_1) {
    "use strict";
    var Registration = (function (_super) {
        __extends(Registration, _super);
        function Registration(props) {
            _super.call(this, props);
        }
        //redux dispatch
        Registration.prototype.handleSubmit = function (data, dispatch) {
            var model = new RegistrationModel_1.default();
            model.userName = data.username;
            model.email = data.email;
            model.password = data.password;
            model.confirmPassword = data.confirmPassword;
            this.props.onRegister(model);
            this.props.resetForm();
        };
        Registration.prototype.componentWillReceiveProps = function () {
        };
        Registration.prototype.render = function () {
            var initValues = {
                initialValues: {
                    email: '',
                    username: '',
                    password: '',
                    confirmPassword: ''
                }
            };
            return (React.createElement("div", null, React.createElement(registrationForm_1.default, React.__spread({}, initValues, {onSubmit: this.handleSubmit.bind(this)}))));
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
            onRegister: function (model) { return dispatch(register_1.default(model)); },
            resetForm: function () { return dispatch(redux_form_1.reset('registrationForm')); }
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Registration);
});
