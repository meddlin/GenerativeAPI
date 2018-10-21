using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using GenerativeAPIDashboard.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GenerativeAPIDashboard.Controllers
{
    [EnableCors("CorsPolicy")]
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ExampleController : ControllerBase
    {
        /// <summary>
        /// Builds a list of links the API supports.
        /// </summary>
        /// <remarks>
        /// A consuming appplication can use this method to generate well-formatted REST calls for this API.
        /// </remarks>
        /// <returns>A <c>List<string></c> containing the </returns>
        public List<RouteCall> GetMethods(Type controllerType)
        {
            var data = new List<RouteCall>();
            controllerType.GetMethods(BindingFlags.Instance | BindingFlags.Public | BindingFlags.DeclaredOnly).ToList().ForEach((m) => {
                data.Add(new RouteCall() { MethodName = m.Name, MethodParams = BuildParamsList(m.GetParameters().ToList()) });
            });
            return data;
        }

        /// <summary>
        /// Build a list of the parameters for a <c>RouteCall</c>.
        /// </summary>
        /// <remarks>
        /// The parameters are expected to be passed along to make a valid call of the method described by the <c>RouteCall</c>.
        /// </remarks>
        /// <param name="paramStuff">A list of <c>ParameterInfo</c> objects retrieved via Reflection.</param>
        /// <returns>A list of <c>Parameter</c> objects.</returns>
        public List<Parameter> BuildParamsList(List<ParameterInfo> paramStuff)
        {
            var data = new List<Parameter>();
            paramStuff.ForEach(
                (ps) => {
                    data.Add(new Parameter()
                    {
                        ParamName = ps.Name,
                        ParamType = $"{ps.ParameterType.Namespace}.{ps.ParameterType.Name}",
                        ParamPropertyInfo = ps.ParameterType.IsClass ? GetEmbeddedParameterInfo(ps.ParameterType) : null
                    });
                });
            return data;
        }

        /// <summary>
        /// Builds a list of <c>Parameter</c> objects embedded in structured objects 
        /// </summary>
        /// <param name="paramDefinedType"></param>
        /// <returns></returns>
        public List<Parameter> GetEmbeddedParameterInfo(Type paramDefinedType)
        {
            var data = new List<Parameter>();
            paramDefinedType.GetProperties().ToList().ForEach((p) =>
            {
                data.Add(new Parameter() { ParamName = p.Name, ParamType = p.PropertyType.Name });
            });
            return data;
        }

        [HttpGet]
        public string ExampleGetAString(string whatGoesIn)
        {
            return $"Must come out => {whatGoesIn}";
        }
        
    }
}