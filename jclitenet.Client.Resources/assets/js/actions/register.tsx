/// <reference path="../interfaces/interfaces.d.ts" />
import { REGISTER_CONSTANTS } from 'constants/constants'

export default function register(model: IRegistrationModel)
{
    return {
        type: REGISTER_CONSTANTS.REGISTER,
        model: model
    }
}