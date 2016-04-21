/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
/// <reference path="../../typings/redux/redux.d.ts" />

import * as React from 'react'
import { createStore } from 'redux'

import loginAction from 'actions/login'
import loginReducer from 'reducers/login' //update
import Registration from 'components/registration/registration'

import { Link } from 'react-router'

export default class Login extends React.Component<ILoginProps, ILoginState>
{
    constructor(props:ILoginProps)
    {
        super(props);
        this.state = {
            isAuthenticated : false
        }
    }

    public handleLogin(event)
    {
        let store = createStore(loginReducer)
        store.subscribe(() => this.setState({
            isAuthenticated: store.getState().isAuthenticated
        }))

        store.dispatch(loginAction())
    }

    public render() {
        return (
            <form name="form" role="form" novalidate>
                <div className="login box centered">
                    <div className="form-horizontal">
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" name="email" className="form-control" placeholder="Email Address" />
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
                                <input type="text" name="password" className="form-control" placeholder="Password" />
                                <div className="error" role="alert">
                                    <div>Password is required</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <button type="button" onClick={this.handleLogin.bind(this)} className="btn btn-success spacer">Login</button>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <Link to='/register'>Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}