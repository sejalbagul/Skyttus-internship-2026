# SHOP CLASS TO ADD AND LIST PRODUCTS
class Shop:
    def __init__(self):
        self.products = []

    def add_products(self, product_name, price):
        self.products.append([product_name,price])
        print(f"Added : {product_name}")

    def list_products(self):
        print("\n Shop Products : ")
        for item in self.products :
            print(f" - {item[0]}: rs {item[1]}")

shop = Shop()
shop.add_products("Stawberry",75)
shop.add_products("Choclaate",25)
shop.list_products()