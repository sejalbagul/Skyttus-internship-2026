Program.cs

/*
 * PROGRAM.CS - Main Application File
 * This is the entry point of your ASP.NET Core application
 * It configures how your web app works and starts it
 */

// These are like including libraries - they give us extra functionality
using System.Diagnostics;           // For opening browser
using System.Runtime.InteropServices; // For detecting operating system

// Create a builder - think of it as a construction worker that builds your app
var builder = WebApplication.CreateBuilder(args);

// Tell the builder we want to use MVC (Model-View-Controller) pattern
// MVC is like organizing your code into three folders: Models, Views, Controllers
builder.Services.AddControllersWithViews();

// Build the application - now the construction worker finishes building
var app = builder.Build();

// ============================================================================
// PART 1: AUTO-OPEN BROWSER (This is extra - helps beginners)
// ============================================================================
// Check if we're in development mode (working on your computer)
if (app.Environment.IsDevelopment())
{
    // Wait 2 seconds, then open browser automatically
    Task.Delay(2000).ContinueWith(_ =>
    {
        // The address where our website will run
        var url = "http://localhost:5231";
        
        try
        {
            // Check what operating system we're using
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                // Windows: Open default browser
                Process.Start(new ProcessStartInfo(url) { UseShellExecute = true });
            }
            else if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
            {
                // Linux: Use xdg-open command
                Process.Start("xdg-open", url);
            }
            else if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX))
            {
                // Mac: Use open command
                Process.Start("open", url);
            }
        }
        catch (Exception ex)  // If something goes wrong
        {
            // Show error message but don't crash the app
            Console.WriteLine($"Could not open browser: {ex.Message}");
            Console.WriteLine($"Please open your browser and go to: {url}");
        }
    });
}

// ============================================================================
// PART 2: ERROR HANDLING (What happens when things go wrong)
// ============================================================================
// If we're NOT in development mode (live website)
if (!app.Environment.IsDevelopment())
{
    // Show a friendly error page instead of crashing
    app.UseExceptionHandler("/Home/Error");
    // Use HTTPS for security in production
    app.UseHsts();
}

// ============================================================================
// PART 3: MIDDLEWARE (Features that process every request)
// ============================================================================
// Redirect HTTP to HTTPS (more secure)
app.UseHttpsRedirection();

// Allow serving static files like CSS, images, JavaScript from wwwroot folder
app.UseStaticFiles();

// Enable routing - this figures out which controller to use based on URL
app.UseRouting();

// Enable authorization - controls who can access what
app.UseAuthorization();

// ============================================================================
// PART 4: ROUTING (How URLs map to code)
// ============================================================================
// This is like a GPS for your website
// Default pattern: {controller=Home}/{action=Index}/{id?}
// Means: 
// - If someone visits "/", go to HomeController's Index action
// - If someone visits "/Home/About", go to HomeController's About action
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// ============================================================================
// PART 5: START THE APPLICATION
// ============================================================================
// This line actually starts your web server
// The application will keep running until you press Ctrl+C
Console.WriteLine("\n🚀 Starting Indian College App...");
Console.WriteLine($"📱 Open your browser and visit: http://localhost:5231");
Console.WriteLine("⏎ Press Ctrl+C to shut down\n");

app.Run();



HomeController.cs
/*
 * HOMECONTROLLER.CS - Handles web requests
 * This controller decides what to show when someone visits different pages
 * 
 * LOCATION: Create this file in: Controllers/HomeController.cs
 */

// These are like including libraries
using Microsoft.AspNetCore.Mvc;  // Gives us MVC functionality

// Tell C# this code belongs to the IndianCollegeApp namespace
namespace IndianCollegeApp.Controllers
{
    // This class handles requests for the home page
    // 'public' means other code can use it
    // 'HomeController' is the name
    // ': Controller' means it inherits from the base Controller class
    public class HomeController : Controller
    {
        // ====================================================================
        // ACTION: Index (Home Page)
        // URL: /  or  /Home/Index
        // ====================================================================
        // This method runs when someone visits the home page
        public IActionResult Index()
        {
            // ViewBag is like a backpack that carries data to the View (HTML page)
            // You can put anything in it
            ViewBag.WelcomeMessage = "Namaste! Welcome to ASP.NET Core";
            ViewBag.CollegeName = "Bharat Institute of Technology";
            ViewBag.StudentCount = 15000;
            
            // Add some Indian student names for demonstration
            ViewBag.TopStudents = new string[] { 
                "Priya Patel", 
                "Arjun Singh", 
                "Lakshmi Iyer",
                "Rahul Sharma",
                "Anjali Desai"
            };
            
            // Return the Index view (Index.cshtml)
            return View();
        }

        // ====================================================================
        // ACTION: Privacy (Privacy Page)
        // URL: /Home/Privacy
        // ====================================================================
        public IActionResult Privacy()
        {
            // Just return the Privacy view
            return View();
        }

        // ====================================================================
        // ACTION: About (About Us Page)
        // URL: /Home/About
        // ====================================================================
        public IActionResult About()
        {
            // Add some information about the college
            ViewBag.Message = "Learn ASP.NET Core with Indian examples";
            ViewBag.Founder = "Dr. Rajesh Sharma";
            ViewBag.Established = 2015;
            ViewBag.Location = "New Delhi, India";
            
            return View();
        }
    }
}

Student.cs
/*
 * STUDENT.CS - Data Model
 * Models represent the data structure of your application
 */

namespace IndianCollegeApp.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Department { get; set; }
        public int Year { get; set; }
        public int Marks { get; set; }
        public string City { get; set; }
    }
}


ErrorViewModel.cs
/*
 * ERRORVIEWMODEL.CS - Error handling model
 * Used to pass error information to error views
 */

namespace IndianCollegeApp.Models
{
    public class ErrorViewModel
    {
        public string RequestId { get; set; }
        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}


Index.cshtml
@*
 * INDEX.CSHTML - Home Page View
 * This is what users see when they visit the home page
 * 
 * LOCATION: Create this file in: Views/Home/Index.cshtml
 *@

@{
    // Set the page title that appears in browser tab
    ViewData["Title"] = "Home - Bharat Institute";
}

<!-- Main welcome section with Indian flag colors -->
<div style="
    text-align: center;
    padding: 60px 20px;
    background: linear-gradient(135deg, #FF9933 0%, #FFFFFF 50%, #138808 100%);
    border-radius: 10px;
    margin: 20px 0;
">
    <!-- Indian flag emoji -->
    <h1 style="font-size: 4em; margin: 0;">🇮🇳</h1>
    
    <!-- Display welcome message from ViewBag -->
    <h1 style="font-size: 3em; margin: 20px 0; color: #000080;">
        @ViewBag.WelcomeMessage
    </h1>
    
    <!-- Display college name -->
    <h2 style="font-size: 2em; color: #000080;">
        @ViewBag.CollegeName
    </h2>
    
    <!-- Sanskrit motto -->
    <p style="font-size: 1.5em; font-style: italic; color: #000080;">
        सत्यमेव जयते
    </p>
</div>

<!-- Statistics section -->
<div style="
    display: flex;
    justify-content: space-around;
    margin: 40px 0;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
">
    <div style="text-align: center;">
        <h3 style="color: #FF9933;">Total Students</h3>
        <h2 style="font-size: 2.5em;">@ViewBag.StudentCount</h2>
    </div>
    <div style="text-align: center;">
        <h3 style="color: #138808;">Courses Offered</h3>
        <h2 style="font-size: 2.5em;">25+</h2>
    </div>
    <div style="text-align: center;">
        <h3 style="color: #000080;">Faculty Members</h3>
        <h2 style="font-size: 2.5em;">150+</h2>
    </div>
</div>

<!-- Top Students Section -->
<div style="margin: 40px 0;">
    <h2 style="text-align: center; color: #000080;">🎓 Our Top Students</h2>
    <div style="
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 20px;
    ">
        @{
            // Create an array of top students with their details
            var students = new[] {
                new { Name = "Priya Patel", Department = "Computer Science", Marks = 98, City = "Mumbai" },
                new { Name = "Arjun Singh", Department = "Mathematics", Marks = 96, City = "Delhi" },
                new { Name = "Lakshmi Iyer", Department = "Physics", Marks = 95, City = "Chennai" },
                new { Name = "Rahul Sharma", Department = "Computer Science", Marks = 94, City = "Bangalore" },
                new { Name = "Anjali Desai", Department = "Chemistry", Marks = 93, City = "Pune" },
                new { Name = "Vikram Mehta", Department = "Electronics", Marks = 92, City = "Ahmedabad" }
            };
            
            // Loop through first 3 students
            for (int i = 0; i < 3; i++)
            {
                var student = students[i];
                <div style="
                    padding: 20px;
                    background: linear-gradient(135deg, #FF9933, #138808);
                    color: white;
                    border-radius: 10px;
                    text-align: center;
                ">
                    <div style="font-size: 3em;">👨‍🎓</div>
                    <h3>@student.Name</h3>
                    <p>@student.Department</p>
                    <p>Marks: @student.Marks%</p>
                    <p>📍 @student.City</p>
                </div>
            }
        }
    </div>
</div>

<!-- Quick Links -->
<div style="
    margin: 40px 0;
    padding: 20px;
    background-color: #000080;
    color: white;
    border-radius: 10px;
    text-align: center;
">
    <a href="#" style="color: white; margin: 0 15px; text-decoration: none;">Admissions 2026</a> |
    <a href="#" style="color: white; margin: 0 15px; text-decoration: none;">Examinations</a> |
    <a href="#" style="color: white; margin: 0 15px; text-decoration: none;">Placements</a> |
    <a href="#" style="color: white; margin: 0 15px; text-decoration: none;">Alumni</a> |
    <a href="#" style="color: white; margin: 0 15px; text-decoration: none;">Scholarships</a>
</div>

<!-- Footer -->
<div style="
    margin-top: 60px;
    padding: 20px;
    text-align: center;
    color: #666;
    border-top: 1px solid #ddd;
">
    <p>© 2026 @ViewBag.CollegeName - All Rights Reserved</p>
    <p>📍 123 Knowledge Park, New Delhi - 110001</p>
    <p>📞 +91 815492 6789 | ✉ info@@bharatinstitute.edu.in</p>
    <p>🇮🇳 Inspired by India's Rich Educational Heritage 🇮🇳</p>
</div>


About.cshtml

@{
    ViewData["Title"] = "About Us";
}

<div style="padding: 40px; max-width: 800px; margin: 0 auto;">
    <h1 style="color: #667eea; text-align: center;">@ViewData["Title"]</h1>
    
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 15px; margin-top: 30px;">
        <h2>@ViewBag.Message</h2>
        <p style="font-size: 1.2em;">Founded by @ViewBag.Founder in @ViewBag.Established</p>
        <hr style="border-color: rgba(255,255,255,0.3);">
        <p>Our mission is to provide quality education to students across India and prepare them for global opportunities.</p>
    </div>
    
    <div style="margin-top: 40px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
        <div style="padding: 20px; background: #f8f9fa; border-radius: 10px;">
            <h3 style="color: #667eea;">Our Vision</h3>
            <p>To be India's leading institution in technology education</p>
        </div>
        <div style="padding: 20px; background: #f8f9fa; border-radius: 10px;">
            <h3 style="color: #667eea;">Our Values</h3>
            <p>Innovation, Integrity, Inclusivity</p>
        </div>
    </div>
</div>

site.css

        /*
 * SITE.CSS - Custom styles for the application
 * wwwroot folder contains static files served directly to browser
 */
        /* Indian theme colors */
        
         :root {
            --saffron: #FF9933;
            /* Indian flag saffron */
            --green: #138808;
            /* Indian flag green */
            --navy: #000080;
            /* Navy blue from Ashoka Chakra */
        }
        /* Custom animations */
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .text-center {
            animation: fadeIn 1s ease-out;
        }
        /* Responsive design */
        
        @media (max-width: 768px) {
            .display-4 {
                font-size: 2em !important;
            }
            div[style*="flex"] {
                flex-direction: column;
            }
        }
        /* Indian flag decoration */
        
        .navbar-brand {
            font-weight: bold;
            background: linear-gradient(to right, var(--saffron), white, var(--green));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
