using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers
{
    public class ProductQueryCondictions
    {
        public QueryCondition<string> ProductID { get; set; }

        public QueryCondition<int> CategoryID { get; set; }

        public QueryCondition<string> ProductName { get; set; }
    }
}
