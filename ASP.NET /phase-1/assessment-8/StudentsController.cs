using Microsoft.AspNetCore.Mvc;
using EFCoreCrudRepo.Models;
using EFCoreCrudRepo.Repositories;

namespace EFCoreCrudRepo.Controllers
{
    public class StudentsController : Controller
    {
        private readonly IStudentRepository _repository;

        public StudentsController(IStudentRepository repository)
        {
            _repository = repository;
        }

        // READ ALL
        public IActionResult Index()
        {
            var students = _repository.GetAll();
            return View(students);
        }

        // CREATE - GET
        public IActionResult Create()
        {
            return View();
        }

        // CREATE - POST
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Student student)
        {
            if (ModelState.IsValid)
            {
                _repository.Add(student);
                _repository.Save();
                return RedirectToAction(nameof(Index));
            }
            return View(student);
        }

        // EDIT - GET
        public IActionResult Edit(int id)
        {
            var student = _repository.GetById(id);
            if (student == null)
                return NotFound();

            return View(student);
        }

        // EDIT - POST
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(Student student)
        {
            if (ModelState.IsValid)
            {
                _repository.Update(student);
                _repository.Save();
                return RedirectToAction(nameof(Index));
            }
            return View(student);
        }

        // DELETE - GET
        public IActionResult Delete(int id)
        {
            var student = _repository.GetById(id);
            if (student == null)
                return NotFound();

            return View(student);
        }

        // DELETE - POST
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            _repository.Delete(id);
            _repository.Save();
            return RedirectToAction(nameof(Index));
        }

        // DETAILS
        public IActionResult Details(int id)
        {
            var student = _repository.GetById(id);
            if (student == null)
                return NotFound();

            return View(student);
        }
    }
}
