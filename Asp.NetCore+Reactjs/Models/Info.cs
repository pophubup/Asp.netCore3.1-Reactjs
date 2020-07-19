using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Models
{
    public class Info
    {
        [JsonProperty("paymentUrl")]
        public PaymentUrl PaymentUrl { get; set; }

        [JsonProperty("transactionId")]
        public double TransactionId { get; set; }

        [JsonProperty("paymentAccessToken")]
        public string PaymentAccessToken { get; set; }
    }
}
