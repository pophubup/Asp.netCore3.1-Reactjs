using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Extension
{
    public class DatabaseInitalize
    {
        public static void Initialize<T> (T context) where T: DbContext
        {
           
            if (context.Database.EnsureCreated())
            {
                return;   
            }
        }
    }
}
