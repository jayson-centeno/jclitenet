/// <reference path="../../typings/redux/redux.d.ts" />
/// <reference path="../../typings/react-router/react-router.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/react-redux/react-redux.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/redux-form/redux-form.d.ts" />

import * as React from 'react'

import { connect } from 'react-redux'
import RegistrationModel from "models/RegistrationModel"
import { Link } from 'react-router'
import register from 'actions/register'

import { reduxForm } from 'redux-form'
import ValidateRegister from 'validations/registerValidation'

class Registration extends React.Component<any, IRegistrationState>
{
    constructor(props: any) 
    {
        super(props)

        this.setDefaultState();

        this.bindHandlers();
    }

    public componentWillMount()
    {

    }

    static contextTypes: React.ValidationMap<any> = {
        router: React.PropTypes.func.isRequired
    }

    static propTypes = {
        fields: React.PropTypes.object.isRequired,
        submitting: React.PropTypes.bool.isRequired,
        handleSubmit: React.PropTypes.func.isRequired
    }

    private setDefaultState()
    {
        this.state = {
            isRegistered: false,
            model: new RegistrationModel()
        }
    }

    private bindHandlers()
    {
        this.handleRegister = this.handleRegister.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleUserNameChange = this.handleUserNameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this)
    }

    private handleEmailChange(e)
    {
        this.state.model.email = e.target.value
        this.updateState(this.state);
    }

    private handleUserNameChange(e) {
        this.state.model.userName = e.target.value
        this.updateState(this.state);
    }

    private handlePasswordChange(e) {
        this.state.model.password= e.target.value
        this.updateState(this.state);
    }

    private handleConfirmPasswordChange(e) {
        this.state.model.confirmPassword = e.target.value 
        this.updateState(this.state);
    }

    public handleRegister(e) {

        e.preventDefault()

        let dataPost = this.state.model
        this.props.onRegister(dataPost)
    }

    private updateState(newState:IRegistrationState) {
        this.setState({
            model: newState.model,
            isRegistered: newState.isRegistered
        })
    }

    //when a component is receiving new props
    public componentWillReceiveProps(nextProps)
    {
        this.updateState({
            model: nextProps.model,
            isRegistered: nextProps.isRegistered
        })

        //this.context.router.push('/')
    }

    public render()
    {
        const { fields: { email, username, password, confirmPassword }, handleSubmit,
            resetForm,
            submitting
        } = this.props

        return (
            <form name="form" role="form" onSubmit={this.handleRegister}>
                <div className="login box centered">
                    <div className="form-horizontal">
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" {...email} className="form-control" placeholder="Email Address" />
                                {email.touched && email.error &&
                                    <div className="error" role="alert">
                                        <div>{email.error}</div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" {...username} className="form-control" placeholder="User Name" />
                                <div className="error" role="alert">
                                    <div>User Name is Invalid</div>
                                </div>
                                <div className="error" role="alert">
                                    <div>User Name is Required</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="password" {...password} className="form-control" placeholder="Password" />
                                <div className="error" role="alert">
                                    <div>Password is required</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="password" {...confirmPassword} className="form-control" placeholder="Confirm Password" />
                                <div className="error" role="alert">
                                    <div>Confirm Password is required</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <button type="submit" disabled={submitting} className="btn btn-success spacer">Register</button>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <Link to="/">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
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
        onRegister: (model) => dispatch(register(model))
    }
}

let fields = ['email', 'username', 'password', 'confirmPassword']
export default reduxForm({
    form: 'Registration',
    fields,
    validate: ValidateRegister
}, mapStateToProps, mapDispatchToProps)(Registration)