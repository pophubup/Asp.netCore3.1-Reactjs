using Asp.NetCore_Reactjs.Entity.Repositories.IRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Entity.Repositories
{
    public class ProductRepository : IGenericRepository<Products, Products>
    {
        private readonly Test2Context _context;

        public ProductRepository(Test2Context context)
        {
            _context = context;
        }
        public IQueryable<Products> GetData()
        {

            return _context.Products.Include(x => x.Category).AsQueryable();
        }

        public IQueryable<Products> GetData(Products objs)
        {
            throw new NotImplementedException();
        }
    }
}
