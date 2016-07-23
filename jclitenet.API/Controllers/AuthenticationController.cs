using jclitenet.Interfaces.Services;
using jclitenet.Security.Model;
using Microsoft.AspNet.Identity;
using System.Threading.Tasks;
using System.Web.Http;

namespace jclitenet.API.Controllers
{
    [Authorize]
    [RoutePrefix("app/auth")]
    public class AuthenticationController: ApiController
    {
        private readonly ISecurityService _securityService;

        public AuthenticationController(ISecurityService securityService)
        {
            _securityService = securityService;
        }

        [AllowAnonymous]
        [Route("login/{email}/{password}")]
        public bool GetAuthenticate(string email, string password)
        {
            return true;
        }

        [AllowAnonymous]
        [Route("register")]
        public async Task<IHttpActionResult> Register(UserModel userModel)
        {
            IdentityResult result = await _securityService.Register(userModel.UserName, userModel.Password);

            if (result.Succeeded)
                return Ok();
            else
                return BadRequest();
        }
    }
}