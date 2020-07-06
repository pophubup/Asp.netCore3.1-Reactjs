using Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Entity.Repositories.IRepository
{
    public interface IGenericRepository<T> where T : class
    {
        public  IQueryable<T> GetData();
        public  IQueryable<T> GetData(ProductQueryResolvercs obj);
        public  List<T> Add(List<T> Input_products);
        public  List<T> Update(List<T> Input_products);
    }
}
