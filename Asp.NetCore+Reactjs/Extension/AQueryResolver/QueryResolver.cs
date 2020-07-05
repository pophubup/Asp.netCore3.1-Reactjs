using Asp.NetCore_Reactjs.Extension.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Asp.NetCore_Reactjs.Extension.AQueryResolver
{
    public abstract class QueryResolver<TEntry, TConditions>
    {
        private Expression expression;
        private ParameterExpression parameter;
        protected TConditions QueryConditions { get; set; }

        public QueryResolver(TConditions queryConditions)
        {
            this.parameter = Expression.Parameter(typeof(TEntry));
            this.expression = Expression.Constant(true);
            this.QueryConditions = queryConditions;
        }
        public abstract Expression<Func<TEntry, bool>> Resolve();

        protected Expression<Func<TEntry, bool>> GenerateLambdaExpression()
        {
            return Expression.Lambda<Func<TEntry, bool>>(this.expression, this.parameter);
        }

        protected void And<TValue>(QueryCondition<TValue> queryCondition, string entryFieldName)
        {
            if (queryCondition != null)
            {
                Expression expression = null;
                Expression property = Expression.Property(this.parameter, entryFieldName);
                Expression constant = Expression.Constant(queryCondition.Value, typeof(TValue));

                switch (queryCondition.Comparsion)
                {
                    case QueryComparsion.GreaterThan:
                        expression = Expression.GreaterThan(property, constant);
                        break;

                    case QueryComparsion.LessThan:
                        expression = Expression.LessThan(property, constant);
                        break;

                    case QueryComparsion.Equal:
                        expression = Expression.Equal(property, constant);
                        break;

                    case QueryComparsion.NotEqual:
                        expression = Expression.NotEqual(property, constant);
                        break;

                    case QueryComparsion.LessThanOrEqual:
                        expression = Expression.LessThanOrEqual(property, constant);
                        break;

                    case QueryComparsion.GreaterThanOrEqual:
                        expression = Expression.GreaterThanOrEqual(property, constant);
                        break;

                    case QueryComparsion.StartsWith:
                        expression = Expression.Call(property, typeof(string).GetMethod("StartsWith", new Type[] { typeof(String) }), constant);
                        break;

                    default:
                        throw new NotSupportedException("不支援此類型");
                }

                this.expression = Expression.And(this.expression, expression);
            }
        }
    }
}
