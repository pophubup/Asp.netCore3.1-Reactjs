using Asp.NetCore_Reactjs.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers
{
    public class ProductQueryResolver : QueryResolver<Products, ProductQueryCondictions>
    {
        public ProductQueryResolver(ProductQueryCondictions productQueryConditions)
         : base(productQueryConditions)
        {
        }
        public override Expression<Func<Products, bool>> Resolve()
        {
            var data = this.QueryConditions.GetType().GetProperties();
            foreach(var i in data)
            {
              
                    if(i.Name == "ProductId" && !string.IsNullOrEmpty(this.QueryConditions.ProductId.Value))
                    {
                        this.And(this.QueryConditions.ProductId, nameof(Products.ProductId));
                    }
                    else if(i.Name == "ProductName" && !string.IsNullOrEmpty(this.QueryConditions.ProductName.Value))
                    {
                        this.And(this.QueryConditions.ProductName, nameof(Products.ProductName));
                    }
                    else if(i.Name == "CategoryId" && this.QueryConditions.CategoryId.Value != 0)
                    {
                        
                        this.And(this.QueryConditions.CategoryId, nameof (Products.CategoryId));
                        
                    }
                
               
            }
           
            return this.GenerateLambdaExpression();
        }
    }
}
