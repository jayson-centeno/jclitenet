using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace jclitenet
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }

        private static string GetFriendlyControllerName(Type controller)
        {
            return controller.Name.ToLowerInvariant().Replace("controller", "");
        }
    }
}
