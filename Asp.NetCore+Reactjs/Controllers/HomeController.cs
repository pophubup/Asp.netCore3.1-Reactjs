using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Asp.NetCore_Reactjs.Entity;
using Asp.NetCore_Reactjs.Entity.Repositories.IRepository;
using Asp.NetCore_Reactjs.Entity.Services.IServices;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Asp.NetCore_Reactjs.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class HomeController : ControllerBase
    {

        private IProductService _productService;
        public HomeController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        [EnableCors]
        public IEnumerable<Products> Index()
        {
            return _productService.GetData().AsEnumerable();
        }
        [HttpPost]
        [EnableCors]
        public IEnumerable<Products> Index(Products products)
        {
            return _productService.GetData(products).AsEnumerable();
        }
        [HttpPost]
        [EnableCors]
        public List<string> AddorEdit_Products(List<Products> Input_products)
        {
            List<string> result = _productService.AddorEdit_Products(Input_products);
            return result;
        }
    }
}
