class Animal:
    def __init__(self,name):
        self.name = name
        
    def make_sound(self):
        return "Sound"
        
class Dog(Animal):
    def make_sound(self):
        return "Woof!"
        
class Cat(Animal):
    def make_sound(self):
        return"Meow!"
        
dog = Dog("Tilu")
cat = Cat("Billu")
print(f"{dog.name} says : {dog.make_sound()}")
print(f"{cat.name} says : {cat.make_sound()}")               