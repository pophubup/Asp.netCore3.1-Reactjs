using Asp.NetCore_Reactjs.Entity.Repositories.IRepository;
using Asp.NetCore_Reactjs.Entity.Services.IServices;
using Asp.NetCore_Reactjs.Extension;
using Asp.NetCore_Reactjs.Extension.AQueryResolver;
using Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers;
using Asp.NetCore_Reactjs.Extension.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Entity.Services
{
    public class ProductService : IProductService
    {
        private IGenericRepository<Products> _productRepository;

        public ProductService(IGenericRepository<Products> productRepository)
        {
            _productRepository = productRepository;
        }

        public List<string> AddorEdit_Products(List<Products> Input_products)
        {
            List<Products> bulk_update = new List<Products>();
            List<Products> bulk_Insert = new List<Products>();
            List<string> result = new List<string>();

            foreach (Products i in Input_products)
            {
                bool isBase64String = i.ProductImage.Contains("data");
                string imagePath = string.Empty;
                if (isBase64String)
                {
                    ConvertBase64ToImage convertBase64ToImage = new ConvertBase64ToImage(i.ProductName, i.ProductImage, i.ProductImage.Split('/')[1].Split(';')[0]);
                    imagePath = convertBase64ToImage.Base64ToImage;
                }

                Products target = GetData().FirstOrDefault(x => x.ProductId == i.ProductId);
                if (target != null)
                {
                    //Edit
                    target.ProductImage = imagePath;
                    target.ProductName = i.ProductName;
                    target.ProductPrice = i.ProductPrice;
                    target.ProductQuantity = i.ProductQuantity;
                    target.CategoryId = i.CategoryId;
                    bulk_update.Add(target);
                }
                else
                {
                    i.ProductImage = imagePath;
                    bulk_Insert.Add(i);
                }
               
            }
            _productRepository.Add(bulk_Insert);
            _productRepository.Update(bulk_update);
            bulk_update.ForEach(x => result.Add($"{x.ProductId }: {x.ProductName} Update success"));
            bulk_Insert.ForEach(x => result.Add($"{x.ProductId }: {x.ProductName} Insert success"));
            return result;
        }

        public IQueryable<Products> GetData()
        {
            return _productRepository.GetData();
        }

        public IQueryable<Products> GetData(Products obj)
        {
            IQueryable<Products> datalist = GetData();

            ProductQueryCondictions productQueryConditions = new ProductQueryCondictions()
            {
                ProductId = new QueryCondition<string>(QueryComparsion.Equal, obj.ProductId != null ? obj.ProductId : null),
                CategoryId = new QueryCondition<int>(QueryComparsion.Equal, obj.CategoryId),
                ProductName = new QueryCondition<string>(QueryComparsion.StartsWith, obj.ProductName != null ? obj.ProductName : null)
            };
            ProductQueryResolvercs productQueryConditionsResolver = new ProductQueryResolvercs(productQueryConditions);
            return _productRepository.GetData(productQueryConditionsResolver);
        }
    }
}
