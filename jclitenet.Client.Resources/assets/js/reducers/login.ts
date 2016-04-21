/// <reference path="../typings/lib.es6.d.ts" />

import { AUTH_CONSTANTS } from 'constants/constants'

let initialState = {
    isAuthenticated: false
}

export default function login(state = initialState, action: any): any {
    switch (action.type) {
        case AUTH_CONSTANTS.LOGIN:
            {
                return Object.assign({}, state, {
                    isAuthenticated: true
                });
            }
        default:
            return state;
    }
}