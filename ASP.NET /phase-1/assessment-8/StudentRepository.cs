using EFCoreCrudRepo.Models;
using EFCoreCrudRepo.Models.Data;
using Microsoft.EntityFrameworkCore;

namespace EFCoreCrudRepo.Repositories
{
    public class StudentRepository : IStudentRepository
    {
        private readonly ApplicationDbContext _context;

        public StudentRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        // READ ALL
        public IEnumerable<Student> GetAll()
        {
            return _context.Students.ToList(); // LINQ
        }

        // READ BY ID
        public Student GetById(int id)
        {
            return _context.Students.FirstOrDefault(s => s.Id == id); // LINQ
        }

        // CREATE
        public void Add(Student student)
        {
            _context.Students.Add(student);
        }

        // UPDATE
        public void Update(Student student)
        {
            _context.Entry(student).State = EntityState.Modified;
        }

        // DELETE
        public void Delete(int id)
        {
            var student = _context.Students.FirstOrDefault(s => s.Id == id);
            if (student != null)
            {
                _context.Students.Remove(student);
            }
        }

        // SAVE CHANGES
        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
