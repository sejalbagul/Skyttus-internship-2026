using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using StudentManagementAPI.DTOs;
using StudentManagementAPI.Models;

namespace StudentManagementAPI.Controllers
{
    [ApiController]
    [Route("api/v1/students")] // API versioning via URL
    public class StudentController : ControllerBase
    {
        private static List<Student> students = new List<Student>(); // In-memory storage
        private readonly IMapper _mapper;

        public StudentController(IMapper mapper)
        {
            _mapper = mapper;
        }

        // GET: api/v1/students
        [HttpGet]
        public ActionResult<List<StudentDTO>> GetAll()
        {
            var studentDTOs = _mapper.Map<List<StudentDTO>>(students);
            return Ok(studentDTOs);
        }

        // GET: api/v1/students/{id}
        [HttpGet("{id}")]
        public ActionResult<StudentDTO> GetById(int id)
        {
            var student = students.FirstOrDefault(s => s.Id == id);
            if (student == null) return NotFound();
            return Ok(_mapper.Map<StudentDTO>(student));
        }

        // POST: api/v1/students
        [HttpPost]
        public ActionResult<StudentDTO> Create(StudentDTO studentDto)
        {
            int newId = students.Count > 0 ? students.Max(s => s.Id) + 1 : 1;

            var student = _mapper.Map<Student>(studentDto);
            student.Id = newId;
            student.DateOfBirth = DateTime.Now.AddYears(-studentDto.Age); // simple approximation

            students.Add(student);
            return CreatedAtAction(nameof(GetById), new { id = student.Id }, _mapper.Map<StudentDTO>(student));
        }

        // PUT: api/v1/students/{id}
        [HttpPut("{id}")]
        public ActionResult<StudentDTO> Update(int id, StudentDTO studentDto)
        {
            var student = students.FirstOrDefault(s => s.Id == id);
            if (student == null) return NotFound();

            student.FirstName = studentDto.FullName.Split(' ')[0];
            student.LastName = studentDto.FullName.Split(' ').Length > 1 ? studentDto.FullName.Split(' ')[1] : "";
            student.Email = studentDto.Email;
            student.DateOfBirth = DateTime.Now.AddYears(-studentDto.Age);

            return Ok(_mapper.Map<StudentDTO>(student));
        }

        // DELETE: api/v1/students/{id}
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var student = students.FirstOrDefault(s => s.Id == id);
            if (student == null) return NotFound();

            students.Remove(student);
            return NoContent();
        }
    }
}
