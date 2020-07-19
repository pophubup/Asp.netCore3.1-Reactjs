using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Asp.NetCore_Reactjs.Entity;
using Asp.NetCore_Reactjs.Entity.Repositories.IRepository;
using Asp.NetCore_Reactjs.Entity.Services.IServices;
using Asp.NetCore_Reactjs.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Asp.NetCore_Reactjs.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    [EnableCors]
    public class HomeController : ControllerBase
    {  
        private IProductService _IProduct;
        private ICategoryServicecs _ICategories;
        private ITranscationService _ITranscation;

        public HomeController(IProductService product, ICategoryServicecs categories, ITranscationService transcation)
        {
            _IProduct = product;
            _ICategories = categories;
            _ITranscation = transcation;
        }
        [HttpGet]
        public IEnumerable<Products> Index()
        {

            return _IProduct.GetData().AsEnumerable();
        }
        [HttpPost]
        public List<string> AddorEdit_Products(List<Products> Input_products)
        {
            List<string> result = _IProduct.AddorEdit_Products(Input_products);
            return result;
        }
        [HttpGet]
        public IEnumerable<Categories> GetCategories()
        {
            return _ICategories.GetCategories().AsEnumerable();
        }
        [HttpPost]
        public List<string> AddorEdit_Categories(List<Categories> categories)
        {
            List<string> result = _ICategories.AddorEdit_Categories(categories);
            return result;
        }
        [HttpPost]
        public TranscationViewModel Add_Transcation_Test([FromBody] List<PostProducts> _Products)
        {
            return _ITranscation.Add_Transcation_Test(_Products);
        }
        [HttpGet]
        public IEnumerable<Transcations> display_Transcations()
        {
            return _ITranscation.Count_AllTranscation();
        }
    }
}
