# BANK ACCOUNT CLASS WITH DEPOSIT AND WITHDRAW METHODS

class BankAccount:
    def __init__(self,name):
        self.name = name
        self.balance = 0
    
    def deposit(self,amount):
        self.balance += amount
        print(f"Balance : {self.balance}")

    def withdraw(self,amount):
        if amount <=self.balance:
            self.balance -= amount
            print(f"Balancer : {self.balance}")
        else:
            print("Not sufficient balance!")

account = BankAccount("Sejal")
account.deposit(100)            # Balance: 100
account.withdraw(50)            # Balance :50
account.withdraw(100)           # Not sufficient balance !
        
