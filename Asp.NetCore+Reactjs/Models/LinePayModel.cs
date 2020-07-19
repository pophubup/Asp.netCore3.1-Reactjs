using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Models
{
    public class LinePayModel
    {
        public int amount { get; set; }
        public string productImageUrl { get; set; }
        public string confirmUrl { get; set; }
        public string productName { get; set; }
        public string orderId { get; set; }
        public string currency { get => "TWD"; }
    }
}
