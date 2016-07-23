/// <reference path="../../typings/redux/redux.d.ts" />
/// <reference path="../../typings/react-router/react-router.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/react-redux/react-redux.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/redux-form/redux-form.d.ts" />

import * as React from 'react'
import { Link } from 'react-router'

import { reduxForm } from 'redux-form'
import ValidateRegister from 'validations/registerValidation'

class RegistrationForm extends React.Component<any, any>
{
    constructor(props: any) {
        super(props)
    }

    public render() {

        const { fields: { email, username, password, confirmPassword }, handleSubmit, resetForm, submitting, valid } = this.props

        return (
            <form name="form" role="form" onSubmit={this.props.handleSubmit}>
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
                                {username.touched && username.error &&
                                    <div className="error" role="alert">
                                        <div>{username.error}</div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="password" {...password} className="form-control" placeholder="Password" />
                                {password.touched && password.error &&
                                    <div className="error" role="alert">
                                        <div>{password.error}</div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="password" {...confirmPassword} className="form-control" placeholder="Confirm Password" />
                                {confirmPassword.touched && confirmPassword.error &&
                                    <div className="error" role="alert">
                                        <div>{confirmPassword.error}</div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <button type="submit" disabled={submitting} className="btn btn-success spacer">
                                    {submitting ? <span className="fa fa-spinner fa-spin" /> : 'Register'} 
                                </button>
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

let fields = ['email', 'username', 'password', 'confirmPassword']

export default reduxForm({
    form: 'registrationForm',
    fields,
    validate: ValidateRegister
})(RegistrationForm)