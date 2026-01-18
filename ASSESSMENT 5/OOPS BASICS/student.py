# STRUDENT CLASS TO CALCULATE AVERAGE MARKS 
class Student:
    def __init__(self,name):
        self.name = name
        self.marks = []

    def add_mark(self,mark):
        self.marks.append(mark)

    def average(self):
        if len(self.marks) == 0:
            return 0
        return sum(self.marks) / len(self.marks)
    
student = Student("Sejal")
student.add_mark(85)
student.add_mark(90)
student.add_mark(78)
print(f"Average : {student.average()}")
       