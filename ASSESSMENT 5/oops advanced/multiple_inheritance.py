# Task 4: Demonstrate multiple inheritance

class Father:
    def method1(self):
        return "Hello from Father"

class Mother:
    def method2(self):
        return "Hello from Mother"

class Child(Father, Mother):
    def method3(self):
        return "From Child"

# Test multiple inheritance
child_obj = Child()
print(child_obj.method1())  # From Father
print(child_obj.method2())  # From Mother
print(child_obj.method3())  # From Child