# Task 5: Polymorphic function for different shapes

class Circle:
    def area(self):
        return "Circle area: π × radius²"

class Square:
    def area(self):
        return "Square area: side × side"

class Triangle:
    def area(self):
        return "Triangle area: ½ × base × height"

# Polymorphic function
def print_area(shape):
    print(shape.area())  # Works with any shape having area() method

# Test polymorphism
shapes = [Circle(), Square(), Triangle()]
for shape in shapes:
    print_area(shape)