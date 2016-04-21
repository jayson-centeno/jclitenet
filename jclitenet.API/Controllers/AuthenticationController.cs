using jclitenet.Security.Model;
using jclitenet.Security.Repository;
using Microsoft.AspNet.Identity;
using System.Threading.Tasks;
using System.Web.Http;

namespace jclitenet.API.Controllers
{
    [RoutePrefix("app/auth")]
    public class AuthenticationController: ApiController
    {
        private AuthRepository authRepository = null;

        public AuthenticationController()
        {
            authRepository = new AuthRepository();
        }

        [HttpGet]
        [Route("login/{email}/{password}")]
        public bool Authenticate(string email, string password)
        {
            return true;
        }

        [AllowAnonymous]
        [Route("register")]
        [HttpPost]
        public async Task<IHttpActionResult> Register(UserModel userModel)
        {
            IdentityResult result = await authRepository.RegisterUser(userModel);

            if (result.Succeeded)
                return Ok();
            else
                return BadRequest();
        }
    }
}