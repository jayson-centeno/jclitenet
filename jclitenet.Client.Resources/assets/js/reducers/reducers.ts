/// <reference path="../typings/redux-form/redux-form.d.ts" />

import { combineReducers } from 'redux'
import loginReducer from "reducers/login"
import register from "reducers/register"
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    register: register,
    form: formReducer
})