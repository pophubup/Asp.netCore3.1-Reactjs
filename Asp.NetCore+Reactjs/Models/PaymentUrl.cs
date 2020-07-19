using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Models
{
    public class PaymentUrl
    {
        [JsonProperty("web")]
        public Uri Web { get; set; }

        [JsonProperty("app")]
        public string App { get; set; }
    }
}
