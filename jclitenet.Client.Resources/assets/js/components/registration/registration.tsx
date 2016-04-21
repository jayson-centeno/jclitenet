/// <reference path="../../typings/redux/redux.d.ts" />
/// <reference path="../../typings/react-router/react-router.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/react-redux/react-redux.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />

import * as React from 'react'

import { connect } from 'react-redux'
import RegistrationModel from "models/RegistrationModel"
import { Link } from 'react-router'
import register from 'actions/register'

class Registration extends React.Component<any, IRegistrationState>
{
    constructor(props: any) 
    {
        super(props)

        this.setDefaultState();

        this.bindHandlers();
    }

    static contextTypes: React.ValidationMap<any> = {
        router: React.PropTypes.func.isRequired
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

        console.log(this.state.isRegistered)
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

        this.context.router.push('/')
    }

    public render()
    {
        return (
            <div name="form" role="form">
                <div className="login box centered">
                    <div className="form-horizontal">
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" name="email" onChange={ this.handleEmailChange } value={this.state.model.email} className="form-control" placeholder="Email Address" />
                                <div className="error" role="alert">
                                    <div>Email is Invalid</div>
                                </div>
                                <div className="error" role="alert">
                                    <div>Email is Required</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" name="UserName" onChange={this.handleUserNameChange} value={this.state.model.userName} className="form-control" placeholder="User Name" />
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
                                <input type="password" name="password" onChange={this.handlePasswordChange} value={this.state.model.password} className="form-control" placeholder="Password" />
                                <div className="error" role="alert">
                                    <div>Password is required</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="password" name="password" onChange={this.handleConfirmPasswordChange} value={this.state.model.confirmPassword} className="form-control" placeholder="Confirm Password" />
                                <div className="error" role="alert">
                                    <div>Confirm Password is required</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <button type="button" onClick={this.handleRegister} className="btn btn-success spacer">Register</button>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <Link to="/">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//(state) is global state
let mapStateToProps = (state) => {
    return {
        model: state.register.model,
        isRegistered: state.register.isRegistered
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onRegister: (model) => dispatch(register(model))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)