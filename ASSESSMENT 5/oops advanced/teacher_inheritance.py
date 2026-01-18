# Task 8: Teacher and Student class showing inheritance

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"My name is {self.name} and I am {self.age} years old."

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
    
    def introduce(self):
        return f"{super().introduce()} My student ID is {self.student_id}."

class Teacher(Person):
    def __init__(self, name, age, subject):
        super().__init__(name, age)
        self.subject = subject
    
    def introduce(self):
        return f"{super().introduce()} I teach {self.subject}."

# Test inheritance
student = Student("Sejal", 24, "S1")
teacher = Teacher("Mr. Shailesh", 30, "C++")

print(student.introduce())  # My name is Sejal and I am 24 years old. My student ID is S1.
print(teacher.introduce())  # My name is Mr. Shailesh and I am 30 years old. I teach C++.