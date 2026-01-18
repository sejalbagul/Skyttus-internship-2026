# LAPTOP CLASS TO APPLY DISCOUNT ON PRICE
class Laptop:
    def __init__(self, brand, price):
        self.brand = brand
        self.price = price

    def discount(self, percent):
        discount_amount = self.price * (percent / 100)
        new_price = self.price -discount_amount
        print(f"New price after {percent} % discount : rs {new_price}")

laptop = Laptop("HP",40000)
laptop.discount(20)