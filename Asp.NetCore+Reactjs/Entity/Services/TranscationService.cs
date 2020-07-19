using Asp.NetCore_Reactjs.Entity.Repositories.IRepository;
using Asp.NetCore_Reactjs.Entity.Services.IServices;
using Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers;
using Asp.NetCore_Reactjs.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Entity.Services
{
    public class TranscationService : ITranscationService
    {
        private IGenericRepository<Transcations, TranscationResolver, TranscationQueryCondictions> _tradeRepository;
        private IGenericRepository<Products, ProductQueryResolver, ProductQueryCondictions> _productRepository;
        public TranscationService(
            IGenericRepository<Transcations, TranscationResolver, TranscationQueryCondictions> tradeRepository,
            IGenericRepository<Products, ProductQueryResolver, ProductQueryCondictions>  productRepository
            )
        {
            _tradeRepository = tradeRepository;
            _productRepository = productRepository;
        }
        public TranscationViewModel Add_Transcation_Test(List<PostProducts> products)
        {
            Random rna = new Random();
            char[] chars = new char[] {
                  'A', 'B', 'C', '1', 'E', 'F','G','4','L','2','J','K','M','N','3','P','4','R','S','V','D','H','i'

                };
            List<string> result = new List<string>();
            List<Transcations> Transcations = new List<Transcations>();
            string TransID = $"{chars[rna.Next(0, 20)]}{chars[rna.Next(0, 23)]}{chars[rna.Next(0, 23)]}{chars[rna.Next(0, 23)]}{chars[rna.Next(0, 23)]}{chars[rna.Next(0, 23)]}{chars[rna.Next(0, 23)]}{chars[rna.Next(0, 23)]}{chars[rna.Next(0, 23)]}{chars[rna.Next(0, 23)]}";
            foreach (var i in products)
            {
                Products productsExisted = _productRepository.GetData().FirstOrDefault(x => x.ProductId == i.ProductId);
                Transcations transcations = new Transcations()
                {
                    TranscationId = TransID,
                    Amout = (decimal)Convert.ToInt32(i.ProductQuantity) * i.ProductPrice,
                    ProductId = i.ProductId,
                    Quantity = Convert.ToInt32(i.ProductQuantity),
                    TracationCreateDate = DateTime.Now

                };
                Transcations.Add(transcations);
                result.Add($"{i.ProductId} :{i.ProductName} Purchase success");

            }
            _tradeRepository.Add(Transcations);
           

            List<LinePayModel> linePayModels = new List<LinePayModel>();
            int total = 0;
            string productName = string.Empty;
            foreach (var i in Transcations)
            {
                total += (int)i.Amout;
                productName += i.Product.ProductName + " ";
            }
            HttpWebRequest httpWebRequest = (HttpWebRequest)WebRequest.Create("https://sandbox-api-pay.line.me/v2/payments/request");
            httpWebRequest.Method = "POST";
            httpWebRequest.ContentType = "application/json";
            httpWebRequest.Headers.Add("X-LINE-ChannelId", "1654043608");
            httpWebRequest.Headers.Add("X-LINE-ChannelSecret", "99ba967eff23b08610ad3a6f9fa250bc");
            Stream requestStream = httpWebRequest.GetRequestStream();
            LinePayModel linePayModel2 = new LinePayModel();
            linePayModel2.amount = total;
            linePayModel2.productImageUrl = "http://placehold.it/94x84";
            linePayModel2.confirmUrl = "http://127.0.0.1:9000/";
            linePayModel2.productName = productName;
            linePayModel2.orderId = Transcations[0].TranscationId;
            ;
            string data = JsonConvert.SerializeObject(linePayModel2);
            using (var streamWriter = new StreamWriter(httpWebRequest.GetRequestStream()))
            {
                streamWriter.Write(data);
            }
            var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
            LineResponseModel lineResponseModel = new LineResponseModel();
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                string response = streamReader.ReadToEnd();
                lineResponseModel = JsonConvert.DeserializeObject<LineResponseModel>(response);
            }

            TranscationViewModel transcationView = new TranscationViewModel()
            {
                ResultMsg = result,
                Transcations = Transcations,
                LineResponseModel = lineResponseModel
            };
            return transcationView;
        }

        public IEnumerable<Transcations> Count_AllTranscation()
        {
            var data = _tradeRepository.GetData().ToList();
            data.ForEach(x => x.TracationCreateDate.Value.ToString("yyyy-MM-dd hh:mm:ss"));
            return data.AsEnumerable();
        }
    }
}
