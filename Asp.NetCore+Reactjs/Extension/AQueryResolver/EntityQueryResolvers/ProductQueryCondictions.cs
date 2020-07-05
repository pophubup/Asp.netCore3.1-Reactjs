using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers
{
    public class ProductQueryCondictions
    {
        public QueryCondition<string> ProductId { get; set; }

        public QueryCondition<int> CategoryId { get; set; }

        public QueryCondition<string> ProductName { get; set; }
    }
}
