using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using System.Transactions;

namespace Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers
{
    public class TranscationResolver : QueryResolver<Asp.NetCore_Reactjs.Entity.Transcations, TranscationQueryCondictions>
    {
        public TranscationResolver(TranscationQueryCondictions TranscationQueryConditions)
       : base(TranscationQueryConditions)
        {
        }
        public override Expression<Func<Asp.NetCore_Reactjs.Entity.Transcations, bool>> Resolve()
        {
            var data = this.QueryConditions.GetType().GetProperties();
            foreach (var i in data)
            {

                if (i.Name == "ProductId" && !string.IsNullOrEmpty(this.QueryConditions.ProductId.Value))
                {
                    this.And(this.QueryConditions.ProductId, nameof(Asp.NetCore_Reactjs.Entity.Transcations.ProductId));
                }
                else if (i.Name == "TranscationId" && !string.IsNullOrEmpty(this.QueryConditions.TranscationId.Value))
                {
                    this.And(this.QueryConditions.TranscationId, nameof(Asp.NetCore_Reactjs.Entity.Transcations.TranscationId));
                }
                else if (i.Name == "Amout" && this.QueryConditions.Amout.Value != 0)
                {

                    this.And(this.QueryConditions.Amout, nameof(Asp.NetCore_Reactjs.Entity.Transcations.Amout));

                }
                else if (i.Name == "Quantity" && this.QueryConditions.Quantity.Value != 0)
                {

                    this.And(this.QueryConditions.Quantity, nameof(Asp.NetCore_Reactjs.Entity.Transcations.Quantity));

                }

            }
            return this.GenerateLambdaExpression();

        }
    }
}
