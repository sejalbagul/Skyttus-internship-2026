using AutoMapper;
using StudentManagementAPI.Models;
using StudentManagementAPI.DTOs;

namespace StudentManagementAPI.Mappings
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Student, StudentDTO>()
                .ForMember(dest => dest.FullName,
                           opt => opt.MapFrom(src => src.FirstName + " " + src.LastName))
                .ForMember(dest => dest.Age,
                           opt => opt.MapFrom(src => DateTime.Now.Year - src.DateOfBirth.Year));

            CreateMap<StudentDTO, Student>()
                .ForMember(dest => dest.FirstName,
                           opt => opt.MapFrom(src => GetFirstName(src.FullName)))
                .ForMember(dest => dest.LastName,
                           opt => opt.MapFrom(src => GetLastName(src.FullName)))
                .ForMember(dest => dest.DateOfBirth, opt => opt.Ignore()); // DOB handled separately
        }

        private string GetFirstName(string fullName)
        {
            if (string.IsNullOrWhiteSpace(fullName)) return "";
            var parts = fullName.Split(' ');
            return parts[0];
        }

        private string GetLastName(string fullName)
        {
            if (string.IsNullOrWhiteSpace(fullName)) return "";
            var parts = fullName.Split(' ');
            return parts.Length > 1 ? parts[1] : "";
        }
    }
}
