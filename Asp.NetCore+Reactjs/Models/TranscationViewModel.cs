using Asp.NetCore_Reactjs.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Models
{
    public class TranscationViewModel
    {
        public List<Transcations> Transcations { get; set; }
        public List<string> ResultMsg { get; set; }
        public LineResponseModel LineResponseModel { get; set; } = new LineResponseModel();
    }
}
