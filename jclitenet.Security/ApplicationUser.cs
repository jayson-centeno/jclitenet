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
    }
}
