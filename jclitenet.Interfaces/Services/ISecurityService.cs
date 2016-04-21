using Microsoft.AspNet.Identity.Owin;
using System.Threading.Tasks;

namespace jclitenet.Interfaces.Services
{
    public interface ISecurityService
    {
        Task<SignInStatus> Login(string username, string password);
    }
}
