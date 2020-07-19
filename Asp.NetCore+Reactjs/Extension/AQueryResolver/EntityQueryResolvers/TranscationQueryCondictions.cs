using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers
{
    public class TranscationQueryCondictions
    {
        public QueryCondition<string> TranscationId { get; set; }

        public QueryCondition<string> ProductId { get; set; }

        public QueryCondition<decimal> Amout { get; set; }

        public QueryCondition<int> Quantity { get; set; }
    }
}
