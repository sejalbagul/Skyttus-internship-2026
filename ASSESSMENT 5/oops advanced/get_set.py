# Task 7: Class with private attributes and getter/setter

class Person:
    def __init__(self, name, age):
        self.__name = name  # Private attribute
        self.__age = age    # Private attribute
    
    # Getter for name
    def get_name(self):
        return self.__name
    
    # Setter for name
    def set_name(self, new_name):
        if len(new_name) > 0:
            self.__name = new_name
        else:
            print("Name cannot be empty!")
    
    # Getter for age
    def get_age(self):
        return self.__age
    
    # Setter for age
    def set_age(self, new_age):
        if 0 <= new_age <= 120:
            self.__age = new_age
        else:
            print("Age must be between 0 and 120!")

# Test private attributes with getters/setters
person = Person("Sejal", 23)
print(person.get_name())  # Sejal
print(person.get_age())   # 25

person.set_name("Sejal Bagul")
person.set_age(24)
print(person.get_name())  # Sejal Bagul
print(person.get_age())   # 24

person.set_age(150)  # Age must be between 0 and 120!