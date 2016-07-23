using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using System.Threading.Tasks;

namespace jclitenet.Interfaces.Services
{
    public interface ISecurityService
    {
        Task<SignInStatus> Login(string username, string password);
        Task<IdentityResult> Register(string username, string password);
    }
}
