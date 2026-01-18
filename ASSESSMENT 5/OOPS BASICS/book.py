# BOOK CLASS TO STORE AND DISPLAY DETAILS 
class Book:
    def __init__(self,title,author,price):
        self.title = title
        self.author = author
        self.price = price

    def display(self):
        print(f"'{self.title}' by {self.author} for rs {self.price}")

b1 = Book("Python Basics","Jaya Prakash",399)
b1.display()
        