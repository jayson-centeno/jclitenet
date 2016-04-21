using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

[assembly: WebActivatorEx.PostApplicationStartMethod(typeof(jclitenet.App_Start.AppWebActivator), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethod(typeof(jclitenet.App_Start.AppWebActivator), "Shutdown")]

namespace jclitenet.App_Start
{
    public static class AppWebActivator
    {
        public static void Start()
        {
            AreaRegistration.RegisterAllAreas();

            RouteConfig.RegisterRoutes(RouteTable.Routes);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);

            //allow json format for the api
            GlobalConfiguration.Configuration.Formatters.Clear();
            GlobalConfiguration.Configuration.Formatters.Add(new System.Net.Http.Formatting.JsonMediaTypeFormatter());

            BundleConfig.RegisterBundles(BundleTable.Bundles);


            //AppVersion.UpdateToLatestVersion(new Guid("{D435073A-231B-4a6f-9FC6-FD708FD263E7}"));
            //AppVersion.UpdateToLatestVersion(new Guid("{4B543CC9-7A7B-4C9F-A43A-A514B9221248}"));

            //CoreFramework4.ObjectMappings.MapDomainObjects();

            //ControllerBuilder.Current.SetControllerFactory(new CoreFramework4.Mvc.StructureMapControllerFactory());
            ////DependencyResolver.SetResolver(new jclitenet.Resolver.MVCDependencyResolver(ObjectFactory.Container));

            //GlobalConfiguration.Configuration.DependencyResolver = new jclitenet.Resolver.DependencyResolver(
            //            CoreFramework4.App_Start.StructuremapMvc.StructureMapDependencyScope.Container);
        }

        public static void Shutdown() 
        {
        }
    }
}