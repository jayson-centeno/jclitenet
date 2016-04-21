/// <reference path="../interfaces/services.d.ts" />

export default class AuthService implements IAuthService
{
    public isAuthenticated(): boolean {
        return true;
    }

    public Authenticate(email: string, password: string): boolean {
        return true;
    }
}