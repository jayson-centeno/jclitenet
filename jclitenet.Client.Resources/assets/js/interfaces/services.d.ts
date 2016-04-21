interface IAuthService {
    isAuthenticated(): boolean
    Authenticate(email:string, password:string): boolean
}