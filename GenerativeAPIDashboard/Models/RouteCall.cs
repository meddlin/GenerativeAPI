using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenerativeAPIDashboard.Models
{
    public class RouteCall
    {
        public string MethodName { get; set; }
        public List<Parameter> MethodParams { get; set; }
    }
}
