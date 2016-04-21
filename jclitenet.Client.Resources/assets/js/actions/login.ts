/// <reference path="../interfaces/interfaces.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/require/require.d.ts" />

import { AUTH_CONSTANTS } from 'constants/constants'

export default () => {
    return {
        type: AUTH_CONSTANTS.LOGIN
    }
}