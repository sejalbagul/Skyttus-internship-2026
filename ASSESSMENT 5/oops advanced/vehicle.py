# Base class
class Vehicle:
    def start(self):
        print("Vehicle starts")

# Car inherits Vehicle
class Car(Vehicle):
    def start(self):
        # Method overriding
        print("Car starts")

# ElectricCar inherits Car
class ElectricCar(Car):
    def start(self):
        # Further overriding
        print("Electric Car starts ")

# Object of ElectricCar
e = ElectricCar()
e.start()