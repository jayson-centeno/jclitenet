using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Security.Claims;
using System.Threading.Tasks;

namespace jclitenet.Security
{
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateIdentityAsync(UserManager<ApplicationUser> manager)
        {
            return await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ExternalBearer);
        }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }
}
