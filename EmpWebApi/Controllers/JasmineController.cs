using System;
using System.Web.Mvc;

namespace EmpWebApi.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
