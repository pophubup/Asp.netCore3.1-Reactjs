using System;
using System.Collections.Generic;

namespace Asp.NetCore_Reactjs.Entity
{
    public partial class Products
    {
        public Products()
        {
            Transcations = new HashSet<Transcations>();
        }

        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal ProductPrice { get; set; }
        public string ProductDescription { get; set; }
        public int? ProductQuantity { get; set; }
        public string ProductImage { get; set; }
        public int CategoryId { get; set; }

        public virtual Categories Category { get; set; }
        public virtual ICollection<Transcations> Transcations { get; set; }
    }
}
