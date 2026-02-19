using Microsoft.AspNetCore.Mvc;
using EduManage.Models;
using System.Diagnostics;

namespace EduManage.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "EduManage - Education Management System";
            ViewData["Description"] = "A comprehensive platform for managing courses, instructors, and students.";
            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Contact Us";
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}