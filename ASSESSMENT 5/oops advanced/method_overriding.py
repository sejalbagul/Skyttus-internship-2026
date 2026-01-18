# Task 3: Implement method overriding

class BaseClass:
    def greet(self):
        return "Hello from BaseClass"

class DerivedClass(BaseClass):
    def greet(self):
        return "Hello from DerivedClass (overridden!)"

# Test method overriding
base_obj = BaseClass()
derived_obj = DerivedClass()

print(base_obj.greet())     # Hello from BaseClass
print(derived_obj.greet())  # Hello from DerivedClass (overridden!)