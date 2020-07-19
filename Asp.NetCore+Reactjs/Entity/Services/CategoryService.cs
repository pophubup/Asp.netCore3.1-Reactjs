using Asp.NetCore_Reactjs.Entity.Repositories.IRepository;
using Asp.NetCore_Reactjs.Entity.Services.IServices;
using Asp.NetCore_Reactjs.Extension.AQueryResolver;
using Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers;
using Asp.NetCore_Reactjs.Extension.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Entity.Services
{
    public class CategoryService : ICategoryServicecs
    {
        private IGenericRepository<Categories, CategoryQueryResolver, CategoryQueryCondictions> _categoryRepository;

        public CategoryService(IGenericRepository<Categories, CategoryQueryResolver, CategoryQueryCondictions> categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }
        public IQueryable<Categories> GetCategories()
        {
            return _categoryRepository.GetData();
        }
        public IQueryable<Categories> GetCategories(Categories categories)
        {
            CategoryQueryCondictions categoryQueryConditions = new CategoryQueryCondictions()
            {
                CategoryName = new QueryCondition<string>(QueryComparsion.StartsWith, categories.CategoryName != null ? categories.CategoryName : null),
                CategoryId = new QueryCondition<int>(QueryComparsion.Equal, categories.CategoryId),
                IsActive = new QueryCondition<bool>(QueryComparsion.Equal, categories.IsActive)
            };
            CategoryQueryResolver categoryQueryResolver = new CategoryQueryResolver(categoryQueryConditions);
            return _categoryRepository.GetData(categoryQueryResolver);
        }
        public List<string> AddorEdit_Categories(List<Categories> category)
        {
            List<Categories> bulk_update = new List<Categories>();
            List<Categories> bulk_Insert = new List<Categories>();
            List<string> result = new List<string>();

            foreach (Categories i in category)
            {

                Categories target = GetCategories().FirstOrDefault(x => x.CategoryId == i.CategoryId);
                if (target != null)
                {
                    //Edit
                    target.CategoryName = i.CategoryName;
                    target.IsActive = i.IsActive;
                    bulk_update.Add(target);
                }
                else
                {
                    bulk_Insert.Add(i);
                }

            }
            _categoryRepository.Add(bulk_Insert);
            _categoryRepository.Update(bulk_update);
            bulk_update.ForEach(x => result.Add($"{x.CategoryId }: {x.CategoryName} Update success"));
            bulk_Insert.ForEach(x => result.Add($"{x.CategoryId }: {x.CategoryName} Insert success"));
            return result;
        }


    }
}
