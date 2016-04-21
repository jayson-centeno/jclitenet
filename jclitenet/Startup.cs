using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using jclitenet.Security;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security.OAuth;
using Microsoft.Owin.Cors;
using System.Web.Http;

[assembly: OwinStartup(typeof(jclitenet.Startup))]

namespace jclitenet
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.CreatePerOwinContext(ApplicationDbContext.Create);
            app.CreatePerOwinContext<ApplicationUserManager>(ApplicationUserManager.Create);
            app.CreatePerOwinContext<ApplicationSignInManager>(ApplicationSignInManager.Create);

            app.UseOAuthBearerTokens(new OAuthAuthorizationServerOptions() { 
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/Token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(10),
                Provider = new SimpleAuthorizationServerProvider()
            });

            var config = new HttpConfiguration();
            WebApiConfig.Register(config);

            app.UseCors(CorsOptions.AllowAll);
            app.UseWebApi(config);
        }
    }
}
