// Import necessary namespaces
using System;           // For basic input/output operations
using System.Collections.Generic;  // For using List collection
using System.Linq;     // For sorting and filtering data

namespace StudentOOP
{
    // 1. CREATE STUDENT CLASS
    // This is the blueprint for creating student objects
    class Student
    {
        // 3. ENCAPSULATION (get/set)
        // Private fields - data hiding (cannot be accessed directly from outside)
        private int studentId;      // Private field for student ID
        private string name;        // Private field for name
        private string department;  // Private field for department
        private int year;          // Private field for year
        private int marks;         // Private field for marks

        // 2. CONSTRUCTOR to initialize values
        // Constructor runs automatically when object is created
        public Student(int studentId, string name, string department, int year, int marks)
        {
            this.studentId = studentId;  // 'this' refers to current object
            this.name = name;
            this.department = department;
            this.year = year;
            this.marks = marks;
        }

        // 3. ENCAPSULATION - Public properties to access private fields
        
        // Property for StudentId
        public int StudentId
        {
            get { return studentId; }    
            set { studentId = value; }   
        }

        // Property for Name
        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        // Property for Department
        public string Department
        {
            get { return department; }
            set { department = value; }
        }

        // Property for Year
        public int Year
        {
            get { return year; }
            set { year = value; }
        }

        // Property for Marks
        public int Marks
        {
            get { return marks; }
            set { marks = value; }
        }

        // Method to display student information in formatted way
        public void DisplayStudentInfo()
        {
            Console.WriteLine($"{StudentId}\t{Name}\t\t{Department}\t\t{Year}\t{Marks}");
        }
    }

    // Main Program Class
    class Program
    {
        static void Main(string[] args)
        {
            // 4. CREATE MULTIPLE STUDENT OBJECTS
            // Creating student objects using constructor
            Console.WriteLine("=== CREATING STUDENT OBJECTS ===\n");
            
            // Student 1 - Computer Science, 2nd Year
            Student student1 = new Student(101, "Aarav Patel", "Computer Science", 2, 85);
            Console.WriteLine("✓ Created: Aarav Patel (ID: 101)");
            
            // Student 2 - Mathematics, 3rd Year  
            Student student2 = new Student(102, "Diya Sharma", "Mathematics", 3, 92);
            Console.WriteLine("✓ Created: Diya Sharma (ID: 102)");
            
            // Student 3 - Computer Science, 1st Year
            Student student3 = new Student(103, "Rohan Mehta", "Computer Science", 1, 67);
            Console.WriteLine("✓ Created: Rohan Mehta (ID: 103)");
            
            // Student 4 - Physics, 2nd Year
            Student student4 = new Student(104, "Ananya Iyer", "Physics", 2, 78);
            Console.WriteLine("✓ Created: Ananya Iyer (ID: 104)");
            
            // Student 5 - Mathematics, 4th Year
            Student student5 = new Student(105, "Vivaan Gupta", "Mathematics", 4, 88);
            Console.WriteLine("✓ Created: Vivaan Gupta (ID: 105)");
            
            // Student 6 - Computer Science, 3rd Year
            Student student6 = new Student(106, "Ishita Verma", "Computer Science", 3, 95);
            Console.WriteLine("✓ Created: Ishita Verma (ID: 106)");
            
            // Student 7 - Physics, 1st Year
            Student student7 = new Student(107, "Kabir Singh", "Physics", 1, 71);
            Console.WriteLine("✓ Created: Kabir Singh (ID: 107)");

            // Create a list to store all student objects
            List<Student> students = new List<Student> { student1, student2, student3, student4, student5, student6, student7 };

            // Display menu and perform operations
            bool exit = false;
            
            while (!exit)
            {
                Console.WriteLine("\n=== STUDENT MANAGEMENT SYSTEM (OOP) ===");
                Console.WriteLine("1. Display All Student Records");
                Console.WriteLine("2. Find Students with Marks > 75");
                Console.WriteLine("3. Sort Students by Marks");
                Console.WriteLine("4. Display Top 3 Scorers");
                Console.WriteLine("5. Exit");
                Console.Write("Enter your choice (1-5): ");
                
                string choice = Console.ReadLine();
                
                switch (choice)
                {
                    case "1":
                        // 5. DISPLAY ALL STUDENT RECORDS
                        DisplayAllStudents(students);
                        break;
                    case "2":
                        // 6. FIND STUDENTS WITH MARKS > 75
                        FindStudentsAbove75(students);
                        break;
                    case "3":
                        // 7. SORT STUDENTS BY MARKS
                        SortStudentsByMarks(students);
                        break;
                    case "4":
                        // 8. DISPLAY TOP 3 SCORERS
                        DisplayTop3Scorers(students);
                        break;
                    case "5":
                        exit = true;
                        Console.WriteLine("Exiting application...");
                        break;
                    default:
                        Console.WriteLine("Invalid choice! Please try again.");
                        break;
                }
            }
        }

        // 5. METHOD TO DISPLAY ALL STUDENT RECORDS
        static void DisplayAllStudents(List<Student> students)
        {
            Console.WriteLine("\n--- ALL STUDENT RECORDS ---");
            Console.WriteLine("ID\tName\t\tDepartment\t\tYear\tMarks");
            Console.WriteLine("--------------------------------------------------------");
            
            foreach (Student student in students)
            {
                student.DisplayStudentInfo();
            }
            
            Console.WriteLine($"\nTotal Students: {students.Count}");
        }

        // 6. METHOD TO FIND STUDENTS WITH MARKS > 75
        static void FindStudentsAbove75(List<Student> students)
        {
            Console.WriteLine("\n--- STUDENTS WITH MARKS > 75 ---");
            
            var topStudents = students.Where(s => s.Marks > 75).ToList();
            
            if (topStudents.Count == 0)
            {
                Console.WriteLine("No students found with marks above 75!");
                return;
            }
            
            Console.WriteLine("ID\tName\t\tDepartment\t\tYear\tMarks");
            Console.WriteLine("--------------------------------------------------------");
            
            foreach (Student student in topStudents)
            {
                student.DisplayStudentInfo();
            }
            
            Console.WriteLine($"\nTotal Students with Marks > 75: {topStudents.Count}");
        }

        // 7. METHOD TO SORT STUDENTS BY MARKS (Descending)
        static void SortStudentsByMarks(List<Student> students)
        {
            Console.WriteLine("\n--- STUDENTS SORTED BY MARKS (HIGHEST TO LOWEST) ---");
            
            var sortedStudents = students.OrderByDescending(s => s.Marks).ToList();
            
            Console.WriteLine("ID\tName\t\tDepartment\t\tYear\tMarks");
            Console.WriteLine("--------------------------------------------------------");
            
            foreach (Student student in sortedStudents)
            {
                student.DisplayStudentInfo();
            }
        }

        // 8. METHOD TO DISPLAY TOP 3 SCORERS
        static void DisplayTop3Scorers(List<Student> students)
        {
            Console.WriteLine("\n--- TOP 3 SCORERS ---");
            
            if (students.Count == 0)
            {
                Console.WriteLine("No students found!");
                return;
            }
            
            var top3Scorers = students.OrderByDescending(s => s.Marks).Take(3).ToList();
            
            Console.WriteLine("RANK\tID\tName\t\tDepartment\t\tYear\tMarks");
            Console.WriteLine("--------------------------------------------------------");
            
            int rank = 1;
            foreach (Student student in top3Scorers)
            {
                Console.Write($"{rank}\t");
                student.DisplayStudentInfo();
                rank++;
            }
            
            var topScorer = top3Scorers.First();
            Console.WriteLine($"\n🏆 TOP SCORER: {topScorer.Name} with {topScorer.Marks} marks!");
        }
    }
}




OUTPUT:-
=== CREATING STUDENT OBJECTS ===

✓ Created: Aarav Patel (ID: 101)
✓ Created: Diya Sharma (ID: 102)
✓ Created: Rohan Mehta (ID: 103)
✓ Created: Ananya Iyer (ID: 104)
✓ Created: Vivaan Gupta (ID: 105)
✓ Created: Ishita Verma (ID: 106)
✓ Created: Kabir Singh (ID: 107)

=== STUDENT MANAGEMENT SYSTEM (OOP) ===
1. Display All Student Records
2. Find Students with Marks > 75
3. Sort Students by Marks
4. Display Top 3 Scorers
5. Exit
Enter your choice (1-5): 1

--- ALL STUDENT RECORDS ---
ID      Name            Department              Year    Marks
--------------------------------------------------------
101     Aarav Patel             Computer Science                2       85
102     Diya Sharma             Mathematics             3       92
103     Rohan Mehta             Computer Science                1       67
104     Ananya Iyer             Physics         2       78
105     Vivaan Gupta            Mathematics             4       88
106     Ishita Verma            Computer Science                3       95
107     Kabir Singh             Physics         1       71

Total Students: 7

=== STUDENT MANAGEMENT SYSTEM (OOP) ===
1. Display All Student Records
2. Find Students with Marks > 75
3. Sort Students by Marks
4. Display Top 3 Scorers
5. Exit
Enter your choice (1-5): 2

--- STUDENTS WITH MARKS > 75 ---
ID      Name            Department              Year    Marks
--------------------------------------------------------
101     Aarav Patel             Computer Science                2       85
102     Diya Sharma             Mathematics             3       92
104     Ananya Iyer             Physics         2       78
105     Vivaan Gupta            Mathematics             4       88
106     Ishita Verma            Computer Science                3       95

Total Students with Marks > 75: 5

=== STUDENT MANAGEMENT SYSTEM (OOP) ===
1. Display All Student Records
2. Find Students with Marks > 75
3. Sort Students by Marks
4. Display Top 3 Scorers
5. Exit
Enter your choice (1-5): 3

--- STUDENTS SORTED BY MARKS (HIGHEST TO LOWEST) ---
ID      Name            Department              Year    Marks
--------------------------------------------------------
106     Ishita Verma            Computer Science                3       95
102     Diya Sharma             Mathematics             3       92
105     Vivaan Gupta            Mathematics             4       88
101     Aarav Patel             Computer Science                2       85
104     Ananya Iyer             Physics         2       78
107     Kabir Singh             Physics         1       71
103     Rohan Mehta             Computer Science                1       67

=== STUDENT MANAGEMENT SYSTEM (OOP) ===
1. Display All Student Records
2. Find Students with Marks > 75
3. Sort Students by Marks
4. Display Top 3 Scorers
5. Exit
Enter your choice (1-5): 4

--- TOP 3 SCORERS ---
RANK    ID      Name            Department              Year    Marks
--------------------------------------------------------
1       106     Ishita Verma            Computer Science                3       95
2       102     Diya Sharma             Mathematics             3       92
3       105     Vivaan Gupta            Mathematics             4       88

🏆 TOP SCORER: Ishita Verma with 95 marks!

=== STUDENT MANAGEMENT SYSTEM (OOP) ===
1. Display All Student Records
2. Find Students with Marks > 75
3. Sort Students by Marks
4. Display Top 3 Scorers
5. Exit
Enter your choice (1-5): 5
Exiting application...
