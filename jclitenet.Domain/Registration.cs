using jclitenet.Security;
using StructureMap;
using System.Web;
using Microsoft.Owin.Security;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;

namespace jclitenet.Domain.DependencyResolution
{
    public class Registration : Registry
    {
        public Registration() 
        {
            //For<ApplicationSignInManager>()
            //    .Use((c, t) =>
            //    {
            //        //var context = new HttpContextWrapper(HttpContext.Current);
            //        //context.GetOwinContext().
            //        //    ]
                    

            //    });
        }
    }
}
