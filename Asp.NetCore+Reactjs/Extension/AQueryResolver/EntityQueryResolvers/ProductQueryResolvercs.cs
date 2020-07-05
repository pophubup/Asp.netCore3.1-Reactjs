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
            if (!string.IsNullOrEmpty(this.QueryConditions.ProductId.Value) &&
               this.QueryConditions.CategoryId.Value == 0 &&
               string.IsNullOrEmpty(this.QueryConditions.ProductName.Value))
            {
                this.And(this.QueryConditions.ProductId, nameof(Products.ProductId));

            }
            else if (string.IsNullOrEmpty(this.QueryConditions.ProductId.Value) &&
                     this.QueryConditions.CategoryId.Value != 0 &&
                     string.IsNullOrEmpty(this.QueryConditions.ProductName.Value))
            {
                this.And(this.QueryConditions.CategoryId, nameof(Products.CategoryId));
            }
            else if (string.IsNullOrEmpty(this.QueryConditions.ProductId.Value) &&
                     this.QueryConditions.CategoryId.Value == 0 &&
                     !string.IsNullOrEmpty(this.QueryConditions.ProductName.Value))
            {
                this.And(this.QueryConditions.ProductName, nameof(Products.ProductName));
            }
            else if (!string.IsNullOrEmpty(this.QueryConditions.ProductId.Value) && this.QueryConditions.CategoryId.Value != 0 && !string.IsNullOrEmpty(this.QueryConditions.ProductName.Value))
            {
                this.And(this.QueryConditions.ProductId, nameof(Products.ProductId));
                this.And(this.QueryConditions.CategoryId, nameof(Products.CategoryId));
            }
            else if (!string.IsNullOrEmpty(this.QueryConditions.ProductId.Value) && !string.IsNullOrEmpty(this.QueryConditions.ProductName.Value) && this.QueryConditions.CategoryId.Value == 0)
            {
                this.And(this.QueryConditions.ProductId, nameof(Products.ProductId));
                this.And(this.QueryConditions.ProductName, nameof(Products.ProductName));
            }
            else if (this.QueryConditions.CategoryId.Value != 0 && !string.IsNullOrEmpty(this.QueryConditions.ProductName.Value) && string.IsNullOrEmpty(this.QueryConditions.ProductId.Value))
            {
                this.And(this.QueryConditions.CategoryId, nameof(Products.CategoryId));
                this.And(this.QueryConditions.ProductName, nameof(Products.ProductName));
            }
            else if (!string.IsNullOrEmpty(this.QueryConditions.ProductName.Value) && !string.IsNullOrEmpty(this.QueryConditions.ProductId.Value) && this.QueryConditions.CategoryId.Value != 0)
            {
                this.And(this.QueryConditions.ProductId, nameof(Products.ProductId));
                this.And(this.QueryConditions.CategoryId, nameof(Products.CategoryId));
                this.And(this.QueryConditions.ProductName, nameof(Products.ProductName));
            }

            return this.GenerateLambdaExpression();
        }
    }
}
