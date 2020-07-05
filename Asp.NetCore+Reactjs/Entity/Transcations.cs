using System;
using System.Collections.Generic;

namespace Asp.NetCore_Reactjs.Entity
{
    public partial class Transcations
    {
        public int Rowid { get; set; }
        public string TranscationId { get; set; }
        public string ProductId { get; set; }
        public decimal Amout { get; set; }
        public int Quantity { get; set; }
        public DateTime? TracationCreateDate { get; set; }

        public virtual Products Product { get; set; }
    }
}
