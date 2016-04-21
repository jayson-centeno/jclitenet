using System.Web.Http;

[assembly: WebActivatorEx.PostApplicationStartMethod(typeof(jclitenet.API.AppWebActivator), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethod(typeof(jclitenet.API.AppWebActivator), "Shutdown")]

namespace jclitenet.API
{
    public static class AppWebActivator
    {
        public static void Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }

        public static void Shutdown()
        {
        }
    }
}