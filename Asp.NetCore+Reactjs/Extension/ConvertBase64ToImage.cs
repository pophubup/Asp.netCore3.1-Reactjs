using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Drawing;

namespace Asp.NetCore_Reactjs.Extension
{
    public class ConvertBase64ToImage
    {
        public string ImageName;
        public string Base64;
        public string type;
        public ConvertBase64ToImage(string ImageName, string Base64, string type)
        {
            this.ImageName = ImageName;
            this.Base64 = Base64;
            this.type = type;
        }
        public string Base64ToImage
        {
            get
            {
                string[] splitBase64 = Base64.Split(',');
                byte[] bytes = Convert.FromBase64String(splitBase64[1]);
              
                Image image;
                using (MemoryStream ms = new MemoryStream(bytes))
                {
                    image = Image.FromStream(ms);
                }
                try
                {

                    if (this.type == "png")
                    {

                        string Domain = Directory.GetCurrentDirectory();
                        image.Save($"{Domain}\\clientapp\\public\\images\\{ImageName.Trim()}.{type}", System.Drawing.Imaging.ImageFormat.Png);
                    }
                    else
                    {
                        string Domain = Directory.GetCurrentDirectory();
                        image.Save($"{Domain}\\clientapp\\public\\images\\{ImageName.Trim()}.{type}", System.Drawing.Imaging.ImageFormat.Jpeg);
                    }


                    return @"../images/" + $"{ImageName.Trim()}.{this.type}";
                }
                catch (Exception ex)
                {
                    return @"../images/default.png";
                }

            }
        }
    }
}
