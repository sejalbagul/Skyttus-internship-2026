namespace AspNetCoreBasics.Services
{
    public class AppService : IAppService
    {
        public string GetMessage()
        {
            return "Hello from AppService!";
        }
    }
}
