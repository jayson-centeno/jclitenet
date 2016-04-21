namespace jclitenet.Domain.Services
{
    using Interfaces.Services;
    using jclitenet.Security;
    using Microsoft.AspNet.Identity.Owin;
    using System.Threading.Tasks;

    public class SecurityService : ISecurityService
    {
        private readonly ApplicationSignInManager _signinManager;
        private readonly ApplicationUserManager _userManager;

        public SecurityService(ApplicationSignInManager signinManager, 
                               ApplicationUserManager userManager) 
        {
            _signinManager = signinManager;
            _userManager = userManager;
        }

        public async Task<SignInStatus> Login(string username, string password)
        {
            return await _signinManager.PasswordSignInAsync(username, password, isPersistent: false, shouldLockout: false);
        }
    }
}