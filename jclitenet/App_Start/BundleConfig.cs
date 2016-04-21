using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Optimization;

namespace jclitenet
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            //var scriptBundle = new ScriptBundle("~/bundles/jquery");
            //scriptBundle.Include("~/Scripts/jquery-1.12.2.min.js");
            //bundles.Add(scriptBundle);

            //var bootStrapBundle = new ScriptBundle("~/bundles/bootstrap");
            //bootStrapBundle.Include("~/Scripts/bootstrap.min.js");
            //bundles.Add(bootStrapBundle);

            var bootstrap = new StyleBundle("~/content/bootstrap");
            bootstrap.Include("~/Content/bootstrap.min.css");
            bundles.Add(bootstrap);

            var fontAwesome = new StyleBundle("~/content/font-awesome/css");
            fontAwesome.Include("~/Content/font-awesome/css/font-awesome.min.css");
            bundles.Add(fontAwesome);
        }
    }
}
