/*
 * COURSE.CS - Model Class
 * Represents a Course entity in the system
 * This is the 'M' in MVC pattern
 */

namespace EduManage.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string CourseName { get; set; }
        public string CourseCode { get; set; }
        public int Credits { get; set; }
        public string Instructor { get; set; }
        public string Department { get; set; }
        public int DurationInWeeks { get; set; }
        public decimal Fee { get; set; }
        public bool IsActive { get; set; }
        public DateTime StartDate { get; set; }
    }
}