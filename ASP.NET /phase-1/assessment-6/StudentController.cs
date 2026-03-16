using Microsoft.AspNetCore.Mvc;
using CrudMvcApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace CrudMvcApp.Controllers
{
    public class StudentController : Controller
    {
        // Temporary In-Memory List (acts like database)
        private static List<Student> students = new List<Student>();

        // READ (Index)
        public IActionResult Index()
        {
            return View(students);
        }

        // CREATE - GET
        public IActionResult Create()
        {
            return View();
        }

        // CREATE - POST
        [HttpPost]
        public IActionResult Create(Student student)
        {
            if (ModelState.IsValid)
            {
                student.Id = students.Count + 1;
                students.Add(student);
                return RedirectToAction("Index");
            }
            return View(student);
        }

        // EDIT - GET
        public IActionResult Edit(int id)
        {
            var student = students.FirstOrDefault(s => s.Id == id);
            if (student == null)
                return NotFound();

            return View(student);
        }

        // EDIT - POST
        [HttpPost]
        public IActionResult Edit(Student student)
        {
            if (ModelState.IsValid)
            {
                var existingStudent = students.FirstOrDefault(s => s.Id == student.Id);
                if (existingStudent == null)
                    return NotFound();

                existingStudent.Name = student.Name;
                existingStudent.Email = student.Email;
                existingStudent.Age = student.Age;

                return RedirectToAction("Index");
            }
            return View(student);
        }

        // DELETE
        public IActionResult Delete(int id)
        {
            var student = students.FirstOrDefault(s => s.Id == id);
            if (student == null)
                return NotFound();

            students.Remove(student);
            return RedirectToAction("Index");
        }
    }
}
