using System;
using System.Web.Http;
using System.Linq;

namespace jclitenet.API
{
    using Controllers;
    using Microsoft.Owin.Security.OAuth;
    using Newtonsoft.Json.Serialization;
    using System.Net.Http.Formatting;
    using System.Web.Http.Owin;

    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            config.Routes.IgnoreRoute("Resource", "{resource}.axd/{*pathInfo}");

            config.MapHttpAttributeRoutes();

            //var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            //jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }

        private static string GetFriendlyControllerName(Type controller)
        {
            return controller.Name.ToLowerInvariant().Replace("controller", "");
        }
    }
}