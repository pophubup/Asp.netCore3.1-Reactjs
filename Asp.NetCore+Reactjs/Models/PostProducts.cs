using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Models
{
    public class PostProducts
    {
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal ProductPrice { get; set; }
        public string ProductDescription { get; set; }
        public int? ProductQuantity { get; set; }
        public string ProductImage { get; set; }
        public int? CategoryId { get; set; }
    }
}
