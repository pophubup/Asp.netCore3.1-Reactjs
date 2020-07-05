using Asp.NetCore_Reactjs.Entity.Repositories.IRepository;
using Asp.NetCore_Reactjs.Extension.AQueryResolver;
using Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers;
using Asp.NetCore_Reactjs.Extension.Enums;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Entity.Repositories
{
    public class ProductRepository : IGenericRepository<Products, Products>
    {
        private readonly Test2Context _context;

        public ProductRepository(Test2Context context)
        {
            _context = context;
        }
        public  IQueryable<Products> GetData()
        {

            return  _context.Products.Include(x => x.Category);
        }

        public IQueryable<Products> GetData(Products obj)
        {
            IQueryable<Products> datalist = GetData();

            ProductQueryCondictions productQueryConditions = new ProductQueryCondictions()
            {
                ProductId = new QueryCondition<string>(QueryComparsion.Equal, obj.ProductId != null ? obj.ProductId : null),
                CategoryId = new QueryCondition<int>(QueryComparsion.Equal, obj.CategoryId != 0 ? (int)obj.CategoryId : 0),
                ProductName = new QueryCondition<string>(QueryComparsion.StartsWith, obj.ProductName != null ? obj.ProductName : null)
            };
            ProductQueryResolvercs productQueryConditionsResolver = new ProductQueryResolvercs(productQueryConditions);
            IQueryable<Products> result = datalist.Where(productQueryConditionsResolver.Resolve());
            return result;
        }
    }
}
