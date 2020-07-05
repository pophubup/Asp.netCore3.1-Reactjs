using Asp.NetCore_Reactjs.Extension.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Extension.AQueryResolver
{
    public class QueryCondition<T> 
    {
        public QueryCondition(QueryComparsion comparsion, T value)
        {
            this.Comparsion = comparsion;
            this.Value = value;
        }

        public QueryComparsion Comparsion { get; private set; }

        public T Value { get; private set; }
    }
}
