using Asp.NetCore_Reactjs.Entity.Repositories.IRepository;
using Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Entity.Repositories
{
    public class TranscationRespository : IGenericRepository<Asp.NetCore_Reactjs.Entity.Transcations, TranscationResolver, TranscationQueryCondictions>
    {
        private Test2Context _context = new Test2Context();
        public List<Transcations> Add(List<Transcations> Input_products)
        {
            _context.AddRange(Input_products);
            _context.SaveChanges();
            return Input_products;
        }

        public IQueryable<Transcations> GetData()
        {
            return _context.Transcations.Include(x=>x.Product);
        }

        public IQueryable<Transcations> GetData(TranscationResolver obj)
        {
            return GetData().Where(obj.Resolve());
        }

        public List<Transcations> Update(List<Transcations> trans)
        {
            _context.Transcations.UpdateRange(trans);
            _context.SaveChanges();

            return trans;
        }
    }
}
