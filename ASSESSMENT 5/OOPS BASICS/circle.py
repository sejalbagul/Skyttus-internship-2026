# CIRCLE CLASS TO FIND AREA AND CIRCUMFERENCE
class Circle:
    def __init__(self,radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius
    
    def circumference(self):
        return 2 * 3.14 * self.radius
    
circle = Circle(6)
print(f"Area : {circle.area()}")
print(f"Circumference : {circle.circumference()}")

    
