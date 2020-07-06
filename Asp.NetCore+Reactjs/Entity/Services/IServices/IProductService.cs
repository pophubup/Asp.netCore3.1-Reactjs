using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Entity.Services.IServices
{
    public interface IProductService
    {
        public IQueryable<Products> GetData();
        public IQueryable<Products> GetData(Products obj);
        public List<string> AddorEdit_Products(List<Products> products);
    }
}
