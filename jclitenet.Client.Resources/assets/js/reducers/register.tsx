/// <reference path="../typings/lib.es6.d.ts" />

import RegistrationModel from 'models/registrationModel'
import { REGISTER_CONSTANTS } from 'constants/constants'

let initialState: IRegistrationState = {
    model: new RegistrationModel(),
    isRegistered: false,
}

export default function register(state = initialState, action) {
    switch (action.type) {
        case REGISTER_CONSTANTS.REGISTER:
        {
            return Object.assign({}, state, {
                isRegistered: true
            });
        }
        default:
            return state;
    }
}