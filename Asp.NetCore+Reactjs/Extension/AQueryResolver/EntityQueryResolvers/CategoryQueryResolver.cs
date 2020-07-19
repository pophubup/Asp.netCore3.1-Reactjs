using Asp.NetCore_Reactjs.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers
{
    public class CategoryQueryResolver : QueryResolver<Categories, CategoryQueryCondictions>
    {
        public CategoryQueryResolver(CategoryQueryCondictions CategoryQueryConditions)
           : base(CategoryQueryConditions)
        {
        }
        public override Expression<Func<Categories, bool>> Resolve()
        {
            var data = this.QueryConditions.GetType().GetProperties();
            foreach (var i in data)
            {

                if (i.Name == "CategoryId" &&  this.QueryConditions.CategoryId.Value !=0)
                {
                    this.And(this.QueryConditions.CategoryId, nameof(Categories.CategoryId));
                }
                else if (i.Name == "CategoryName" && !string.IsNullOrEmpty(this.QueryConditions.CategoryName.Value))
                {
                    this.And(this.QueryConditions.CategoryName, nameof(Categories.CategoryName));
                }
                else if (i.Name == "IsActive" )
                {

                    this.And(this.QueryConditions.IsActive, nameof(Categories.IsActive));

                }


            }

            return this.GenerateLambdaExpression();
        }
    }
}
