using Microsoft.AspNetCore.Mvc;
using EduManage.Models;

namespace EduManage.Controllers
{
    public class CourseController : Controller
    {
        // GET: /Course/Index
        public IActionResult Index()
        {
            var courses = GetSampleCourses();
            return View(courses);  // Returns List<Course>
        }

        // GET: /Course/Details/5
        public IActionResult Details(int id)
        {
            var course = GetSampleCourses().FirstOrDefault(c => c.Id == id);
            
            if (course == null)
            {
                return NotFound();
            }
            
            return View(course);  // Returns single Course
        }

        // GET: /Course/ActiveCourses
        public IActionResult ActiveCourses()
        {
            var courses = GetSampleCourses().Where(c => c.IsActive).ToList();
            return View(courses);  // Returns List<Course>
        }

        // GET: /Course/ByDepartment/Computer%20Science
        public IActionResult ByDepartment(string department)
        {
            var courses = GetSampleCourses()
                .Where(c => c.Department.Equals(department, StringComparison.OrdinalIgnoreCase))
                .ToList();
            
            ViewBag.DepartmentName = department;
            return View(courses);  // Returns List<Course>
        }

        // Helper method to create sample data
        private List<Course> GetSampleCourses()
        {
            return new List<Course>
            {
                new Course
                {
                    Id = 1,
                    CourseName = "Data Structures and Algorithms",
                    CourseCode = "CS201",
                    Credits = 4,
                    Instructor = "Dr. Priya Sharma",
                    Department = "Computer Science",
                    DurationInWeeks = 15,
                    Fee = 15000,
                    IsActive = true,
                    StartDate = DateTime.Parse("2026-01-15")
                },
                new Course
                {
                    Id = 2,
                    CourseName = "Database Management Systems",
                    CourseCode = "CS301",
                    Credits = 3,
                    Instructor = "Prof. Rajesh Kumar",
                    Department = "Computer Science",
                    DurationInWeeks = 14,
                    Fee = 12000,
                    IsActive = true,
                    StartDate = DateTime.Parse("2026-01-20")
                },
                new Course
                {
                    Id = 3,
                    CourseName = "Calculus and Linear Algebra",
                    CourseCode = "MA101",
                    Credits = 4,
                    Instructor = "Dr. Anjali Desai",
                    Department = "Mathematics",
                    DurationInWeeks = 16,
                    Fee = 10000,
                    IsActive = true,
                    StartDate = DateTime.Parse("2026-01-10")
                },
                new Course
                {
                    Id = 4,
                    CourseName = "Quantum Physics",
                    CourseCode = "PH201",
                    Credits = 3,
                    Instructor = "Dr. Vikram Singh",
                    Department = "Physics",
                    DurationInWeeks = 15,
                    Fee = 14000,
                    IsActive = false,
                    StartDate = DateTime.Parse("2026-02-01")
                },
                new Course
                {
                    Id = 5,
                    CourseName = "Web Development with ASP.NET",
                    CourseCode = "CS401",
                    Credits = 4,
                    Instructor = "Mr. Arun Patel",
                    Department = "Computer Science",
                    DurationInWeeks = 12,
                    Fee = 18000,
                    IsActive = true,
                    StartDate = DateTime.Parse("2026-02-15")
                },
                new Course
                {
                    Id = 6,
                    CourseName = "Probability and Statistics",
                    CourseCode = "MA201",
                    Credits = 3,
                    Instructor = "Prof. Meera Nair",
                    Department = "Mathematics",
                    DurationInWeeks = 14,
                    Fee = 11000,
                    IsActive = true,
                    StartDate = DateTime.Parse("2026-01-25")
                }
            };
        }
    }
}