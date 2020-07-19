using Asp.NetCore_Reactjs.Entity.Repositories.IRepository;
using Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Entity.Repositories
{
    public class CategoryRepository : IGenericRepository<Categories, CategoryQueryResolver, CategoryQueryCondictions>
    {
        private Test2Context Test2Context = new Test2Context();
        public List<Categories> Add(List<Categories> Input_products)
        {
            Test2Context.Categories.AddRange(Input_products);
            Test2Context.SaveChanges();
            return Input_products;
        }

        public IQueryable<Categories> GetData()
        {
            return Test2Context.Categories.AsQueryable().Where(x => x.IsActive == true);
        }

        public IQueryable<Categories> GetData(CategoryQueryResolver obj)
        {
            return GetData().Where(obj.Resolve());
        }

        public List<Categories> Update(List<Categories> Input_products)
        {

            Test2Context.Categories.UpdateRange(Input_products);
            Test2Context.SaveChanges();
            return Input_products;
        }
    }
}
