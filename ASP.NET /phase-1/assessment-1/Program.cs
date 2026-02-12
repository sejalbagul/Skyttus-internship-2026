Program.cs

// Import necessary namespaces - like including libraries in other languages
using System;           // For basic input/output operations
using System.Collections.Generic;  // For using List collection
using System.Linq;     // For sorting and filtering data

namespace StudentManagement  // Organizes our code in a container
{
    // Class - blueprint for creating student objects
    class Student
    {
        // Properties - characteristics of a student
        // { get; set; } automatically creates methods to read/write values
        public int StudentId { get; set; }     // Student's ID number
        public string Name { get; set; }        // Student's name
        public string Department { get; set; }  // Student's department
        public int Marks { get; set; }          // Student's marks
    }

    // Program class contains our main application
    class Program
    {
        // List to store multiple students - like a dynamic array
        // static means this belongs to the class itself, not to any object
        static List<Student> students = new List<Student>();

        // Main method - entry point of our program
        // static - can be called without creating object
        // void - returns nothing
        // string[] args - command line arguments
        static void Main(string[] args)
        {
            // Variable to control when to exit the program
            bool exit = false;
            
            // Keep running until user chooses to exit
            while (!exit)  // while exit is false, run the loop
            {
                // Display menu options to user
                Console.WriteLine("\n=== STUDENT MANAGEMENT SYSTEM ===");
                Console.WriteLine("1. Add Student Details");
                Console.WriteLine("2. Display All Students");
                Console.WriteLine("3. Display Name and Department Only");
                Console.WriteLine("4. Find Students with Marks > 75");
                Console.WriteLine("5. Display Students from Specific Department");
                Console.WriteLine("6. Sort Students by Marks (Descending)");
                Console.WriteLine("7. Display Top Scorer");
                Console.WriteLine("8. Exit");
                Console.Write("Enter your choice (1-8): ");
                
                // Read user's choice as string
                string choice = Console.ReadLine();
                
                // Execute different code based on user's choice
                switch (choice)
                {
                    case "1":  // If user pressed 1
                        AddStudent();  // Call method to add student
                        break;         // Exit switch statement
                    case "2":
                        DisplayAllStudents();
                        break;
                    case "3":
                        DisplayNameAndDepartment();
                        break;
                    case "4":
                        DisplayMarksAbove75();
                        break;
                    case "5":
                        DisplayStudentsByDepartment();
                        break;
                    case "6":
                        SortStudentsByMarks();
                        break;
                    case "7":
                        DisplayTopScorer();
                        break;
                    case "8":          // If user wants to exit
                        exit = true;   // Set exit to true to stop while loop
                        Console.WriteLine("Exiting application...");
                        break;
                    default:           // If user enters anything else
                        Console.WriteLine("Invalid choice! Please try again.");
                        break;
                }
            }
        }

        // Method to add a new student to our list
        static void AddStudent()
        {
            Console.WriteLine("\n--- Add New Student ---");
            
            // Create a new Student object
            Student student = new Student();
            
            // Get student ID from user
            Console.Write("Enter Student ID: ");
            // Read input as string, convert to integer, store in student object
            student.StudentId = int.Parse(Console.ReadLine());
            
            // Get student name
            Console.Write("Enter Student Name: ");
            student.Name = Console.ReadLine();  // Read and store directly as string
            
            // Get department
            Console.Write("Enter Department: ");
            student.Department = Console.ReadLine();
            
            // Get marks
            Console.Write("Enter Marks: ");
            student.Marks = int.Parse(Console.ReadLine());
            
            // Add the complete student object to our list
            students.Add(student);
            
            // Confirm addition to user
            Console.WriteLine("Student added successfully!");
        }

        // Method to display all students
        static void DisplayAllStudents()
        {
            Console.WriteLine("\n--- All Students ---");
            
            // Check if list is empty
            if (students.Count == 0)  // Count property gives number of items
            {
                Console.WriteLine("No students found!");
                return;  // Exit the method early
            }
            
            // Display header with tabs (\t) for alignment
            Console.WriteLine("ID\tName\t\tDepartment\tMarks");
            Console.WriteLine("----------------------------------------");
            
            // Loop through each student in the list
            foreach (var student in students)  // var automatically detects type
            {
                // Display each student's details
                // $ before string allows embedding variables directly with {}
                Console.WriteLine($"{student.StudentId}\t{student.Name}\t\t{student.Department}\t\t{student.Marks}");
            }
        }

        // Method to display only name and department
        static void DisplayNameAndDepartment()
        {
            Console.WriteLine("\n--- Name and Department Only ---");
            
            if (students.Count == 0)
            {
                Console.WriteLine("No students found!");
                return;
            }
            
            Console.WriteLine("Name\t\tDepartment");
            Console.WriteLine("------------------------");
            
            // Loop through each student
            foreach (var student in students)
            {
                // Display only name and department, not ID and marks
                Console.WriteLine($"{student.Name}\t\t{student.Department}");
            }
        }

        // Method to find students with marks greater than 75
        static void DisplayMarksAbove75()
        {
            Console.WriteLine("\n--- Students with Marks > 75 ---");
            
            // LINQ query: from students list, select where marks > 75, convert to list
            var topStudents = students.Where(s => s.Marks > 75).ToList();
            // s is each student, => means "such that"
            
            if (topStudents.Count == 0)
            {
                Console.WriteLine("No students found with marks above 75!");
                return;
            }
            
            Console.WriteLine("ID\tName\t\tDepartment\tMarks");
            Console.WriteLine("----------------------------------------");
            
            // Loop through only the filtered students
            foreach (var student in topStudents)
            {
                Console.WriteLine($"{student.StudentId}\t{student.Name}\t\t{student.Department}\t\t{student.Marks}");
            }
        }

        // Method to display students from specific department
        static void DisplayStudentsByDepartment()
        {
            Console.Write("\nEnter Department Name: ");
            string dept = Console.ReadLine();  // Get department name from user
            
            // Find students whose department matches input (case insensitive)
            var deptStudents = students.Where(s => 
                s.Department.Equals(dept, StringComparison.OrdinalIgnoreCase)).ToList();
            
            Console.WriteLine($"\n--- Students from {dept} Department ---");
            // $ with variable inserts dept value into string
            
            if (deptStudents.Count == 0)
            {
                Console.WriteLine($"No students found in {dept} department!");
                return;
            }
            
            Console.WriteLine("ID\tName\t\tMarks");
            Console.WriteLine("------------------------");
            
            foreach (var student in deptStudents)
            {
                Console.WriteLine($"{student.StudentId}\t{student.Name}\t\t{student.Marks}");
            }
        }

        // Method to sort and display students by marks (highest first)
        static void SortStudentsByMarks()
        {
            Console.WriteLine("\n--- Students Sorted by Marks (Descending) ---");
            
            if (students.Count == 0)
            {
                Console.WriteLine("No students found!");
                return;
            }
            
            // OrderByDescending sorts from highest to lowest
            var sortedStudents = students.OrderByDescending(s => s.Marks).ToList();
            
            Console.WriteLine("ID\tName\t\tDepartment\tMarks");
            Console.WriteLine("----------------------------------------");
            
            foreach (var student in sortedStudents)
            {
                Console.WriteLine($"{student.StudentId}\t{student.Name}\t\t{student.Department}\t\t{student.Marks}");
            }
        }

        // Method to display the student with highest marks
        static void DisplayTopScorer()
        {
            Console.WriteLine("\n--- Top Scorer ---");
            
            if (students.Count == 0)
            {
                Console.WriteLine("No students found!");
                return;
            }
            
            // Sort by marks descending and take the first student
            var topScorer = students.OrderByDescending(s => s.Marks).First();
            
            // Display each detail on separate line (simpler format)
            Console.WriteLine("ID: " + topScorer.StudentId);      // String concatenation
            Console.WriteLine("Name: " + topScorer.Name);         // using + operator
            Console.WriteLine("Department: " + topScorer.Department);
            Console.WriteLine("Marks: " + topScorer.Marks);
            Console.WriteLine("------------------------");
        }
    }
}


OUTPUT:-
=== STUDENT MANAGEMENT SYSTEM ===
1. Add Student Details
2. Display All Students
3. Display Name and Department Only
4. Find Students with Marks > 75
5. Display Students from Specific Department
6. Sort Students by Marks (Descending)      
7. Display Top Scorer
8. Exit
Enter your choice (1-8): 1

--- Add New Student ---
Enter Student ID: 1
Enter Student Name: SEJAL
Enter Department: IT
Enter Marks: 90
Student added successfully!

=== STUDENT MANAGEMENT SYSTEM ===
1. Add Student Details
2. Display All Students
3. Display Name and Department Only
4. Find Students with Marks > 75
5. Display Students from Specific Department
6. Sort Students by Marks (Descending)
7. Display Top Scorer
8. Exit
Enter your choice (1-8): 2

--- All Students ---
ID      Name            Department      Marks
----------------------------------------
1       SEJAL           IT              90

=== STUDENT MANAGEMENT SYSTEM ===
1. Add Student Details
2. Display All Students
3. Display Name and Department Only
4. Find Students with Marks > 75
5. Display Students from Specific Department
6. Sort Students by Marks (Descending)
7. Display Top Scorer
8. Exit
Enter your choice (1-8): 3

--- Name and Department Only ---
Name            Department
------------------------
SEJAL           IT

=== STUDENT MANAGEMENT SYSTEM ===
1. Add Student Details
2. Display All Students
3. Display Name and Department Only
4. Find Students with Marks > 75
5. Display Students from Specific Department
6. Sort Students by Marks (Descending)
7. Display Top Scorer
8. Exit
Enter your choice (1-8): 4

--- Students with Marks > 75 ---
ID      Name            Department      Marks
----------------------------------------
1       SEJAL           IT              90

=== STUDENT MANAGEMENT SYSTEM ===
1. Add Student Details
2. Display All Students
3. Display Name and Department Only
4. Find Students with Marks > 75
5. Display Students from Specific Department
6. Sort Students by Marks (Descending)
7. Display Top Scorer
8. Exit
Enter your choice (1-8): 5

Enter Department Name: IT

--- Students from IT Department ---
ID      Name            Marks
------------------------
1       SEJAL           90

=== STUDENT MANAGEMENT SYSTEM ===
1. Add Student Details
2. Display All Students
3. Display Name and Department Only
4. Find Students with Marks > 75
5. Display Students from Specific Department
6. Sort Students by Marks (Descending)
7. Display Top Scorer
8. Exit
Enter your choice (1-8): 6

--- Students Sorted by Marks (Descending) ---
ID      Name            Department      Marks
----------------------------------------
1       SEJAL           IT              90

=== STUDENT MANAGEMENT SYSTEM ===
1. Add Student Details
2. Display All Students
3. Display Name and Department Only
4. Find Students with Marks > 75
5. Display Students from Specific Department
6. Sort Students by Marks (Descending)
7. Display Top Scorer
8. Exit
Enter your choice (1-8): 7

--- Top Scorer ---
ID: 1
Name: SEJAL
Department: IT
Marks: 90
------------------------

=== STUDENT MANAGEMENT SYSTEM ===
1. Add Student Details
2. Display All Students
3. Display Name and Department Only
4. Find Students with Marks > 75
5. Display Students from Specific Department
6. Sort Students by Marks (Descending)
7. Display Top Scorer
8. Exit
Enter your choice (1-8):
