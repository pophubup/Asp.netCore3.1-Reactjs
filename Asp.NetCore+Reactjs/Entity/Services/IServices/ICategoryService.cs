using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Entity.Services.IServices
{
    public interface ICategoryServicecs
    {
        public IQueryable<Categories> GetCategories();

        public IQueryable<Categories> GetCategories(Categories categories);

        public List<string> AddorEdit_Categories(List<Categories> category);

    
    }
}
