using Asp.NetCore_Reactjs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Entity.Services.IServices
{
    public interface ITranscationService
    {
        public TranscationViewModel Add_Transcation_Test(List<PostProducts> products);

        public IEnumerable<Transcations> Count_AllTranscation();
    }
}
