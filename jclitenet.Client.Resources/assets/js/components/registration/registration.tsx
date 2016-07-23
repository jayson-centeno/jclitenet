/// <reference path="../../typings/redux/redux.d.ts" />
/// <reference path="../../typings/react-router/react-router.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/react-redux/react-redux.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/redux-form/redux-form.d.ts" />
/// <reference path="../../typings/q/q.d.ts" />

import * as React from 'react'
import RegistrationForm from 'components/registration/registrationForm'
import register from 'actions/register'
import RegistrationModel from "models/RegistrationModel"
import AuthService from 'services/authService'
import { connect } from 'react-redux'
import { reset } from 'redux-form';

class Registration extends React.Component<any, any>
{
    constructor(props: any) {
        super(props)
    }

    //redux dispatch
    public handleSubmit(data, dispatch) {

        var model = new RegistrationModel()
        model.userName = data.username
        model.email = data.email
        model.password = data.password
        model.confirmPassword = data.confirmPassword

        this.props.onRegister(model)

        this.props.resetForm();

    }

    public componentWillReceiveProps()
    {
    }

    public render() {

        let initValues = {
            initialValues: {
                email: '',
                username: '',
                password: '',
                confirmPassword: ''
            }
        }

        return (
            <div>
                <RegistrationForm {...initValues} onSubmit={this.handleSubmit.bind(this)} />
            </div>
        )
    }
}

//(state) is global state
let mapStateToProps = (state) => {
    return {
        model: state.register.model,
        isRegistered: state.register.isRegistered,
        Registration: state.form.Registration
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onRegister: (model) => dispatch(register(model)),
        resetForm: () => dispatch(reset('registrationForm'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)