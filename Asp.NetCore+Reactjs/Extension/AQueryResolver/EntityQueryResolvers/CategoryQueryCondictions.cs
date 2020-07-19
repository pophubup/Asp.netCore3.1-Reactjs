using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers
{
    public class CategoryQueryCondictions
    {
        public QueryCondition<int> CategoryId { get; set; }

        public QueryCondition<string> CategoryName { get; set; }

        public QueryCondition<bool> IsActive { get; set; }
    }
}
