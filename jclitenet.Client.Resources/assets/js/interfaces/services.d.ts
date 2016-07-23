/// <reference path="../typings/q/q.d.ts" />

interface IAuthService {
    isAuthenticated(): boolean
    Authenticate(email: string, password: string): Q.Promise<{}> 
    Register(model: IRegistrationModel): Q.Promise<{}>
}