using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenerativeAPIDashboard.Models
{
    public class Parameter
    {
        public string ParamName { get; set; }
        public string ParamType { get; set; }
        public List<Parameter> ParamPropertyInfo { get; set; }
    }
}
