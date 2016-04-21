using System;
using System.Web.Http;
using System.Linq;

namespace jclitenet.API
{
    using Controllers;
    using Newtonsoft.Json.Serialization;
    using System.Net.Http.Formatting;
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "App Api",
                routeTemplate: "app/{action}/{id}",
                defaults: new { controller = GetFriendlyControllerName(typeof(AuthenticationController)), id = RouteParameter.Optional }
            );

            config.MapHttpAttributeRoutes();

            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }

        private static string GetFriendlyControllerName(Type controller)
        {
            return controller.Name.ToLowerInvariant().Replace("controller", "");
        }
    }
}