using System.Web.Http;
using Newtonsoft.Json.Serialization;

[assembly: WebActivator.PreApplicationStartMethod(
    typeof(MvcApplication26.App_Start.BreezeWebApiConfig), "RegisterBreezePreStart")]
namespace MvcApplication26.App_Start {
  ///<summary>
  /// Inserts the Breeze Web API controller route at the front of all Web API routes
  ///</summary>
  ///<remarks>
  /// This class is discovered and run during startup; see
  /// http://blogs.msdn.com/b/davidebb/archive/2010/10/11/light-up-your-nupacks-with-startup-code-and-webactivator.aspx
  ///</remarks>
  public static class BreezeWebApiConfig {

    public static void RegisterBreezePreStart() {
        //-----------------------------
        // Stuff I added begins here
        //-----------------------------
        var config = GlobalConfiguration.Configuration;
        var routes = config.Routes;
        routes.MapHttpRoute(
            name: "DefaultApi",
            routeTemplate: "api/{controller}/{id}",
            defaults: new { id = RouteParameter.Optional } //,
            //constraints: new { id = @"\d+" } // only allow numeric ids
        );

        config.EnableQuerySupport();

        // Remove Xml formatters. This means when we visit an endpoint from a browser,
        // Instead of returning Xml, it will return Json.
        // More information from Dave Ward: http://jpapa.me/P4vdx6
        config.Formatters.Remove(config.Formatters.XmlFormatter);

        // Configure json camelCasing per the following post: http://jpapa.me/NqC2HH
        // Here we configure it to write JSON property names with camel casing
        // without changing our server-side data model:
        var json = config.Formatters.JsonFormatter;
        json.SerializerSettings.ContractResolver =
            new CamelCasePropertyNamesContractResolver();
        //-----------------------------
        //-----------------------------

        
        GlobalConfiguration.Configuration.Routes.MapHttpRoute(
          name: "BreezeApi",
          routeTemplate: "api/{controller}/{action}"
      );
    }
  }
}