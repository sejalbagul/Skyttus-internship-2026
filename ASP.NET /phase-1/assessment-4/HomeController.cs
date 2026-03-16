using Microsoft.AspNetCore.Mvc;
using AspNetCoreBasics.Services;

namespace AspNetCoreBasics.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IAppService _appService;
        private readonly ILogger<HomeController> _logger;

        // Inject ILogger
        public HomeController(
            IConfiguration configuration,
            IAppService appService,
            ILogger<HomeController> logger)
        {
            _configuration = configuration;
            _appService = appService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetAppSettings()
        {
            _logger.LogInformation("GetAppSettings endpoint was called.");

            var appName = _configuration["AppSettings:AppName"];
            var version = _configuration["AppSettings:Version"];
            var message = _appService.GetMessage();

            _logger.LogInformation("AppName: {AppName}, Version: {Version}", appName, version);

            return Ok(new
            {
                AppName = appName,
                Version = version,
                ServiceMessage = message
            });
        }
    }
}
