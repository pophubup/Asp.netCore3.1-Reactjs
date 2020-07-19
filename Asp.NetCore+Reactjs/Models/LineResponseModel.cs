using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Models
{
    public class LineResponseModel
    {
        [JsonProperty("returnCode")]
        public string ReturnCode { get; set; }

        [JsonProperty("returnMessage")]
        public string ReturnMessage { get; set; }

        [JsonProperty("info")]
        public Info Info { get; set; }
    }
}
