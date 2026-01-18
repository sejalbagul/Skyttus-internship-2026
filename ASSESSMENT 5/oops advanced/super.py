# Task 10: Demonstrate the use of super() in inheritance

class Parent:
    def __init__(self, value):
        self.value = value
        print(f"Parent initialized with value: {self.value}")
    
    def show(self):
        print(f"Parent value: {self.value}")

class Child(Parent):
    def __init__(self, value, extra_value):
        # Call parent's __init__ using super()
        super().__init__(value)
        self.extra_value = extra_value
        print(f"Child initialized with extra value: {self.extra_value}")
    
    def show(self):
        # Call parent's show method using super()
        super().show()
        print(f"Child extra value: {self.extra_value}")

# Test super() usage
child_obj = Child(10, 20)
# Output:
# Parent initialized with value: 10
# Child initialized with extra value: 20

child_obj.show()
# Output:
# Parent value: 10
# Child extra value: 20