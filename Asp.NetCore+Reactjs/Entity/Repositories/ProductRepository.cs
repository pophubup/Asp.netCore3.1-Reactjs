using Asp.NetCore_Reactjs.Entity.Repositories.IRepository;
using Asp.NetCore_Reactjs.Extension;
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
    public class ProductRepository : IGenericRepository<Products, ProductQueryResolver, ProductQueryCondictions>
    {
        private  Test2Context _context = new Test2Context();
        public List<Products> Add(List<Products> bulk_add)
        {
            _context.Products.AddRange(bulk_add);
            _context.SaveChanges();
            return bulk_add;
            
                
        }
        public List<Products> Update(List<Products> bulk_update)
        {
            _context.Products.UpdateRange(bulk_update);
            _context.SaveChanges();
         
            return bulk_update;


        }
        public  IQueryable<Products> GetData()
        {

            return  _context.Products.Include(x => x.Category);
        }

        public IQueryable<Products> GetData(ProductQueryResolver obj)
        {
            return GetData().Where(obj.Resolve());
        }
    }
}
