# Task 6: Bank system with different account types

class BankAccount:
    def __init__(self, account_holder, balance=0):
        self.account_holder = account_holder
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        return f"Deposited Rs. {amount}. New balance: Rs. {self.balance}"

class SavingsAccount(BankAccount):
    def __init__(self, account_holder, balance=0, interest_rate=0.02):
        super().__init__(account_holder, balance)
        self.interest_rate = interest_rate
    
    def add_interest(self):
        interest = self.balance * self.interest_rate
        self.balance += interest
        return f"Interest added: Rs.{interest:.2f}"

class CurrentAccount(BankAccount):
    def __init__(self, account_holder, balance=0, overdraft_limit=1000):
        super().__init__(account_holder, balance)
        self.overdraft_limit = overdraft_limit
    
    def withdraw(self, amount):
        if amount <= self.balance + self.overdraft_limit:
            self.balance -= amount
            return f"Withdrew Rs.{amount}. New balance: Rs.{self.balance}"
        return "Insufficient funds!"

# Test bank system
savings = SavingsAccount("Sejal", 1000)
current = CurrentAccount("Rinkal", 500)

print(savings.deposit(500))  # Deposited Rs.500. New balance: Rs.1500
print(savings.add_interest())  # Interest added: Rs.30.00

print(current.withdraw(600))  # Withdrew Rs. 600. New balance: Rs.-100
print(current.withdraw(2000))  # Insufficient funds!
