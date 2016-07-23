/// <reference path="../interfaces/services.d.ts" />
/// <reference path="../typings/q/q.d.ts" />


import * as Q from 'q'

export default class AuthService implements IAuthService
{
    public isAuthenticated(): boolean {
        return true;
    }

    public Authenticate(email: string, password: string): Q.Promise<{}> {

        var defer = Q.defer()
        setTimeout(() => {

            defer.resolve(null)

        }, 1000)

        return defer.promise
    }

    public Register(model: IRegistrationModel): Q.Promise<{}>
    {
        var defer = Q.defer()
        setTimeout(() => {

            defer.resolve(null)

        }, 1000)

        return defer.promise
    }
}