using AspNetCoreBasics.Services;
var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddScoped<IAppService, AppService>();

var app = builder.Build();
app.UseMiddleware<AspNetCoreBasics.Middleware.RequestLoggingMiddleware>();


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapGet("/", () =>
{
    return Results.Content(
        "<h1>Welcome to ASP.NET Core API</h1>",
        "text/html"
    );
});


app.Run();
