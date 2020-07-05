using Asp.NetCore_Reactjs.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers
{
    public class ProductQueryResolvercs : QueryResolver<Products, ProductQueryCondictions>
    {
        public ProductQueryResolvercs(ProductQueryCondictions productQueryConditions)
         : base(productQueryConditions)
        {
        }
        public override Expression<Func<Products, bool>> Resolve()
        {
            
            throw new NotImplementedException();
        }
    }
}
