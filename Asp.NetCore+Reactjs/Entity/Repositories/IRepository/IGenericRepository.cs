using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Entity.Repositories.IRepository
{
    public interface IGenericRepository<T,S> 
        where T : class, new()
        where S : class, new()
    {
        public IQueryable<T> GetData();
        public IQueryable<T> GetData(S objs);
    }
}
