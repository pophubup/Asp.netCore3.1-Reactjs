using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Asp.NetCore_Reactjs.Entity;
using Asp.NetCore_Reactjs.Entity.Repositories.IRepository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Asp.NetCore_Reactjs.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class HomeController : ControllerBase
    {

        private IGenericRepository<Products, Products> _productRepository;
        public HomeController(IGenericRepository<Products, Products> productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        [EnableCors]
        public IEnumerable<Products> Index()
        {
            return _productRepository.GetData().AsEnumerable();
        }
    }
}
