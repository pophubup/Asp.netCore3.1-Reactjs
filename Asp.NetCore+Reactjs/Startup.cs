using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Asp.NetCore_Reactjs.Entity;
using Asp.NetCore_Reactjs.Entity.Repositories;
using Asp.NetCore_Reactjs.Entity.Repositories.IRepository;
using Asp.NetCore_Reactjs.Entity.Services;
using Asp.NetCore_Reactjs.Entity.Services.IServices;
using Asp.NetCore_Reactjs.Extension.AQueryResolver.EntityQueryResolvers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace Asp.NetCore_Reactjs
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;


        }
        public IConfiguration Configuration { get; }
    

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddScoped<IGenericRepository<Products, ProductQueryResolver, ProductQueryCondictions>, ProductRepository>();
            services.AddScoped<IGenericRepository<Categories, CategoryQueryResolver, CategoryQueryCondictions>, CategoryRepository>();
            services.AddScoped<IGenericRepository<Transcations, TranscationResolver, TranscationQueryCondictions>, TranscationRespository>();
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<ICategoryServicecs, CategoryService>();
            services.AddScoped<ITranscationService, TranscationService>();
            services.AddControllers(option => option.EnableEndpointRouting = false).AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    builder =>
                    {
                        builder.AllowAnyOrigin().AllowAnyOrigin().AllowAnyHeader();
                    });

            });
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "clientapp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseSpaStaticFiles();
            app.UseMvc();
            app.UseRouting();
            app.UseCors();

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = Path.Join(env.ContentRootPath, "clientapp");

                if (env.IsDevelopment())
                {

                    spa.Options.StartupTimeout = TimeSpan.FromSeconds(60);
                    spa.UseReactDevelopmentServer(npmScript: "start");

                }
            });
        }
    }
}
