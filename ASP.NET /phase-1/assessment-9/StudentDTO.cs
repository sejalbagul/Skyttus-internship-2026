namespace StudentManagementAPI.DTOs
{
    public class StudentDTO
    {
        public int Id { get; set; } // optional, mainly for GET/PUT
        public string FullName { get; set; } = string.Empty; // First + Last name combined
        public string Email { get; set; } = string.Empty;
        public int Age { get; set; } // calculated from DOB
    }
}
