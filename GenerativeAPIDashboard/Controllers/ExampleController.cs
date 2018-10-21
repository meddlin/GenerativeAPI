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
    [Produces("application/json")]
    [EnableCors("CorsPolicy")]
    [Route("api/Example/[action]")]
    public class ExampleController : ControllerBase
    {
        [HttpGet]
        public List<RouteCall> GetMethods()
        {
            var data = new List<RouteCall>();
            typeof(ExampleController).GetMethods(BindingFlags.Instance | BindingFlags.Public | BindingFlags.DeclaredOnly).ToList().ForEach((m) => {
                data.Add(new RouteCall() { MethodName = m.Name, MethodParams = BuildParamsList(m.GetParameters().ToList()) });
            });
            return data;
        }

        private List<Parameter> BuildParamsList(List<ParameterInfo> paramStuff)
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

        private List<Parameter> GetEmbeddedParameterInfo(Type paramDefinedType)
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