using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Asp.NetCore_Reactjs.Entity;
using Asp.NetCore_Reactjs.Entity.Repositories;
using Asp.NetCore_Reactjs.Entity.Repositories.IRepository;
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
            ILoggerFactory = LoggerFactory.Create(builder =>
            {
                builder
                 .AddFilter((category, level) =>
                     category == DbLoggerCategory.Database.Command.Name
                     && level == LogLevel.Information)
                 .AddConsole();
            });


        }
        public IConfiguration Configuration { get; }
        public ILoggerFactory ILoggerFactory { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddScoped<ILoggerFactory, LoggerFactory>();
            services.AddScoped<IGenericRepository<Products, Products>, ProductRepository>();
            services.AddMvc(option => option.EnableEndpointRouting = false).AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
          
            services.AddDbContext<Test2Context>(options =>
            {
                options.UseLoggerFactory(ILoggerFactory).EnableSensitiveDataLogging().UseSqlServer("Server =.; Database = Test2; Trusted_Connection = True;");
            });
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "myshoppingcart/build";
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
                spa.Options.SourcePath = Path.Join(env.ContentRootPath, "myshoppingcart");

                if (env.IsDevelopment())
                {

                    spa.Options.StartupTimeout = TimeSpan.FromSeconds(60);
                    spa.UseReactDevelopmentServer(npmScript: "start");

                }
            });
        }
    }
}
