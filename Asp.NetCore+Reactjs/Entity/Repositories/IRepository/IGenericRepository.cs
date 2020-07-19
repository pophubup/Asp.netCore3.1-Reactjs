using Asp.NetCore_Reactjs.Extension.AQueryResolver;
using Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Entity.Repositories.IRepository
{
    public interface IGenericRepository<T,R,C>
        where T : class
        where R : QueryResolver<T, C>
    {
        public  IQueryable<T> GetData();
        public  IQueryable<T> GetData(R obj);
        public  List<T> Add(List<T> Input_products);
        public  List<T> Update(List<T> Input_products);
    }
}
