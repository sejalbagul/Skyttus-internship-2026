# car class with accelerate and brake methods
class Car:
    def __init__(self,brand,model,speed):
        self.brand = brand
        self.model = model
        self.speed = speed
    
    def accelerate(self):
        self.speed += 10
        print("Speed after acceleration : ",self.speed) 

    def brake(self):
        self.speed -= 10
        print("Speed after brake: ", self.speed)

car1 = Car("Toyota","Innova",60)
car1.accelerate()
car1.brake()

        
