# EMPLOYEE CLASS TO DISPLAY SALARY DETAILS 
class Employee:
    def __init__(self,name,salary):
        self.name = name
        self.salary = salary

    def display(self):
        print("Employee Name: ",self.name)
        print("Salary : ",self.salary)

e1 = Employee("Sejal",25000)
e1.display()
        