import re  # For email validation
import json  # For data persistence
from datetime import datetime  # For transaction timestamps
import random  # For generating account numbers

class BankAccount:
    def __init__(self):
        """Initialize bank system with empty accounts dictionary and load existing data"""
        self.accounts = {}
        self.transaction_history = {}
        self.load_data()  # Load existing accounts from file
    
    def load_data(self):
        """Load account data from JSON file if exists"""
        try:
            with open('bank_data.json', 'r') as file:
                data = json.load(file)
                self.accounts = data.get('accounts', {})
                self.transaction_history = data.get('transactions', {})
            print("✓ Data loaded successfully!")
        except FileNotFoundError:
            print("ℹ No existing data found. Starting fresh.")
        except json.JSONDecodeError:
            print("⚠ Data file corrupted. Starting fresh.")
    
    def save_data(self):
        """Save account data to JSON file"""
        try:
            data = {
                'accounts': self.accounts,
                'transactions': self.transaction_history
            }
            with open('bank_data.json', 'w') as file:
                json.dump(data, file, indent=4)
            print("✓ Data saved successfully!")
        except Exception as e:
            print(f"⚠ Error saving data: {e}")
    
    def generate_account_number(self):
        """Generate unique 10-digit account number"""
        while True:
            acc_no = str(random.randint(10**9, 10**10 - 1))
            if acc_no not in self.accounts:
                return acc_no
    
    def validate_name(self, name):
        """Validate name contains only letters and spaces"""
        if not name.replace(" ", "").isalpha():
            return False, "Name should contain only letters and spaces"
        if len(name.strip()) < 2:
            return False, "Name must be at least 2 characters long"
        return True, "Valid name"
    
    def validate_email(self, email):
        """Validate email format using regex"""
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(pattern, email):
            return False, "Invalid email format"
        return True, "Valid email"
    
    def validate_phone(self, phone):
        """Validate phone number (10 digits)"""
        phone = phone.strip()
        if not phone.isdigit() or len(phone) != 10:
            return False, "Phone number must be 10 digits"
        return True, "Valid phone number"
    
    def validate_pan(self, pan):
        """Validate PAN card format"""
        pattern = r'^[A-Z]{5}[0-9]{4}[A-Z]{1}$'
        if not re.match(pattern, pan.upper()):
            return False, "Invalid PAN format (Format: ABCDE1234F)"
        return True, "Valid PAN"
    
    def validate_age(self, age):
        """Validate age is between 18 and 100"""
        try:
            age_int = int(age)
            if age_int < 18:
                return False, "Must be at least 18 years old"
            if age_int > 100:
                return False, "Age must be reasonable (under 100)"
            return True, "Valid age"
        except ValueError:
            return False, "Age must be a number"
    
    def validate_amount(self, amount):
        """Validate amount is positive number"""
        try:
            amount_float = float(amount)
            if amount_float <= 0:
                return False, "Amount must be positive"
            return True, "Valid amount"
        except ValueError:
            return False, "Amount must be a number"
    
    def create_account(self):
        """Create a new bank account with validation"""
        print("\n" + "="*50)
        print("CREATE NEW ACCOUNT")
        print("="*50)
        
        # Get and validate name
        while True:
            name = input("Enter Full Name: ").strip()
            valid, msg = self.validate_name(name)
            if valid:
                break
            print(f"⚠ {msg}")
        
        # Get and validate email
        while True:
            email = input("Enter Email: ").strip()
            valid, msg = self.validate_email(email)
            if valid:
                # Check if email already exists
                email_exists = any(acc.get('email') == email for acc in self.accounts.values())
                if email_exists:
                    print("⚠ Email already registered")
                else:
                    break
            else:
                print(f"⚠ {msg}")
        
        # Get and validate phone
        while True:
            phone = input("Enter Phone Number: ").strip()
            valid, msg = self.validate_phone(phone)
            if valid:
                # Check if phone already exists
                phone_exists = any(acc.get('phone') == phone for acc in self.accounts.values())
                if phone_exists:
                    print("⚠ Phone number already registered")
                else:
                    break
            else:
                print(f"⚠ {msg}")
        
        # Get and validate PAN
        while True:
            pan = input("Enter PAN Number: ").strip().upper()
            valid, msg = self.validate_pan(pan)
            if valid:
                # Check if PAN already exists
                pan_exists = any(acc.get('pan') == pan for acc in self.accounts.values())
                if pan_exists:
                    print("⚠ PAN already registered")
                else:
                    break
            else:
                print(f"⚠ {msg}")
        
        # Get and validate age
        while True:
            age = input("Enter Age: ").strip()
            valid, msg = self.validate_age(age)
            if valid:
                break
            print(f"⚠ {msg}")
        
        # Get and validate initial deposit
        while True:
            initial_deposit = input("Enter Initial Deposit (Minimum ₹500): ").strip()
            valid, msg = self.validate_amount(initial_deposit)
            if valid and float(initial_deposit) >= 500:
                break
            print(f"⚠ {msg} (Minimum ₹500 required)")
        
        # Get account type
        print("\nSelect Account Type:")
        print("1. Savings Account")
        print("2. Current Account")
        while True:
            acc_type = input("Enter choice (1 or 2): ").strip()
            if acc_type in ['1', '2']:
                acc_type = 'Savings' if acc_type == '1' else 'Current'
                break
            print("⚠ Please enter 1 or 2")
        
        # Generate account number
        acc_no = self.generate_account_number()
        
        # Create account dictionary
        self.accounts[acc_no] = {
            'name': name,
            'email': email,
            'phone': phone,
            'pan': pan,
            'age': int(age),
            'balance': float(initial_deposit),
            'account_type': acc_type,
            'created_date': datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }
        
        # Initialize transaction history
        self.transaction_history[acc_no] = [{
            'type': 'Initial Deposit',
            'amount': float(initial_deposit),
            'balance': float(initial_deposit),
            'timestamp': datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }]
        
        print("\n" + "="*50)
        print("✅ ACCOUNT CREATED SUCCESSFULLY!")
        print("="*50)
        print(f"Account Number: {acc_no}")
        print(f"Account Holder: {name}")
        print(f"Account Type: {acc_type}")
        print(f"Initial Balance: ₹{float(initial_deposit):.2f}")
        print("="*50)
        
        self.save_data()
    
    def view_account(self):
        """View account details"""
        print("\n" + "="*50)
        print("VIEW ACCOUNT DETAILS")
        print("="*50)
        
        acc_no = input("Enter Account Number: ").strip()
        
        if acc_no in self.accounts:
            account = self.accounts[acc_no]
            print("\n" + "="*50)
            print("ACCOUNT DETAILS")
            print("="*50)
            print(f"Account Number: {acc_no}")
            print(f"Account Holder: {account['name']}")
            print(f"Email: {account['email']}")
            print(f"Phone: {account['phone']}")
            print(f"PAN: {account['pan']}")
            print(f"Age: {account['age']}")
            print(f"Account Type: {account['account_type']}")
            print(f"Current Balance: ₹{account['balance']:.2f}")
            print(f"Account Created: {account['created_date']}")
            print("="*50)
        else:
            print("❌ Account not found!")
    
    def deposit(self):
        """Deposit money into account"""
        print("\n" + "="*50)
        print("DEPOSIT MONEY")
        print("="*50)
        
        acc_no = input("Enter Account Number: ").strip()
        
        if acc_no in self.accounts:
            # Get and validate deposit amount
            while True:
                amount = input("Enter Deposit Amount: ").strip()
                valid, msg = self.validate_amount(amount)
                if valid:
                    amount_float = float(amount)
                    break
                print(f"⚠ {msg}")
            
            # Update balance
            self.accounts[acc_no]['balance'] += amount_float
            
            # Record transaction
            transaction = {
                'type': 'Deposit',
                'amount': amount_float,
                'balance': self.accounts[acc_no]['balance'],
                'timestamp': datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }
            self.transaction_history[acc_no].append(transaction)
            
            print(f"\n✅ Deposit successful!")
            print(f"New Balance: ₹{self.accounts[acc_no]['balance']:.2f}")
            
            self.save_data()
        else:
            print("❌ Account not found!")
    
    def withdraw(self):
        """Withdraw money from account"""
        print("\n" + "="*50)
        print("WITHDRAW MONEY")
        print("="*50)
        
        acc_no = input("Enter Account Number: ").strip()
        
        if acc_no in self.accounts:
            current_balance = self.accounts[acc_no]['balance']
            print(f"Current Balance: ₹{current_balance:.2f}")
            
            # Get and validate withdrawal amount
            while True:
                amount = input("Enter Withdrawal Amount: ").strip()
                valid, msg = self.validate_amount(amount)
                if valid:
                    amount_float = float(amount)
                    if amount_float > current_balance:
                        print(f"⚠ Insufficient funds! Available: ₹{current_balance:.2f}")
                    else:
                        break
                else:
                    print(f"⚠ {msg}")
            
            # Check minimum balance requirement
            min_balance = 500 if self.accounts[acc_no]['account_type'] == 'Savings' else 1000
            if current_balance - amount_float < min_balance:
                print(f"⚠ Cannot withdraw! Minimum balance requirement: ₹{min_balance}")
                return
            
            # Update balance
            self.accounts[acc_no]['balance'] -= amount_float
            
            # Record transaction
            transaction = {
                'type': 'Withdrawal',
                'amount': amount_float,
                'balance': self.accounts[acc_no]['balance'],
                'timestamp': datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }
            self.transaction_history[acc_no].append(transaction)
            
            print(f"\n✅ Withdrawal successful!")
            print(f"New Balance: ₹{self.accounts[acc_no]['balance']:.2f}")
            
            self.save_data()
        else:
            print("❌ Account not found!")
    
    def check_balance(self):
        """Check account balance"""
        print("\n" + "="*50)
        print("CHECK BALANCE")
        print("="*50)
        
        acc_no = input("Enter Account Number: ").strip()
        
        if acc_no in self.accounts:
            print(f"\nAccount Holder: {self.accounts[acc_no]['name']}")
            print(f"Current Balance: ₹{self.accounts[acc_no]['balance']:.2f}")
        else:
            print("❌ Account not found!")
    
    def view_transactions(self):
        """View transaction history"""
        print("\n" + "="*50)
        print("TRANSACTION HISTORY")
        print("="*50)
        
        acc_no = input("Enter Account Number: ").strip()
        
        if acc_no in self.accounts:
            if acc_no in self.transaction_history and self.transaction_history[acc_no]:
                print(f"\nTransaction History for {self.accounts[acc_no]['name']}:")
                print("-"*80)
                print(f"{'Date/Time':<20} {'Type':<15} {'Amount':<15} {'Balance':<15}")
                print("-"*80)
                
                for transaction in self.transaction_history[acc_no]:
                    print(f"{transaction['timestamp']:<20} "
                          f"{transaction['type']:<15} "
                          f"₹{transaction['amount']:<14.2f} "
                          f"₹{transaction['balance']:<14.2f}")
                print("-"*80)
            else:
                print("No transactions found for this account.")
        else:
            print("❌ Account not found!")
    
    def delete_account(self):
        """Delete bank account"""
        print("\n" + "="*50)
        print("DELETE ACCOUNT")
        print("="*50)
        
        acc_no = input("Enter Account Number to delete: ").strip()
        
        if acc_no in self.accounts:
            # Confirm deletion
            print(f"\nAccount Holder: {self.accounts[acc_no]['name']}")
            print(f"Balance: ₹{self.accounts[acc_no]['balance']:.2f}")
            
            confirm = input("\nAre you sure you want to delete this account? (yes/no): ").strip().lower()
            
            if confirm == 'yes':
                # Refund balance if any
                if self.accounts[acc_no]['balance'] > 0:
                    print(f"⚠ Balance of ₹{self.accounts[acc_no]['balance']:.2f} will be refunded!")
                
                # Delete account
                del self.accounts[acc_no]
                if acc_no in self.transaction_history:
                    del self.transaction_history[acc_no]
                
                print("✅ Account deleted successfully!")
                self.save_data()
            else:
                print("Account deletion cancelled.")
        else:
            print("❌ Account not found!")
    
    def display_all_accounts(self):
        """Display all accounts (Admin function)"""
        print("\n" + "="*50)
        print("ALL ACCOUNTS")
        print("="*50)
        
        if not self.accounts:
            print("No accounts found!")
            return
        
        print(f"\n{'Acc Number':<12} {'Name':<20} {'Type':<10} {'Balance':<15}")
        print("-"*60)
        
        for acc_no, account in self.accounts.items():
            print(f"{acc_no:<12} "
                  f"{account['name'][:18]:<20} "
                  f"{account['account_type']:<10} "
                  f"₹{account['balance']:<14.2f}")
        print("-"*60)
        print(f"Total Accounts: {len(self.accounts)}")
    
    def menu(self):
        """Display main menu"""
        while True:
            print("\n" + "="*50)
            print("BANK MANAGEMENT SYSTEM")
            print("="*50)
            print("1. Create New Account")
            print("2. View Account Details")
            print("3. Deposit Money")
            print("4. Withdraw Money")
            print("5. Check Balance")
            print("6. View Transaction History")
            print("7. Delete Account")
            print("8. Display All Accounts (Admin)")
            print("9. Exit")
            print("="*50)
            
            choice = input("Enter your choice (1-9): ").strip()
            
            if choice == '1':
                self.create_account()
            elif choice == '2':
                self.view_account()
            elif choice == '3':
                self.deposit()
            elif choice == '4':
                self.withdraw()
            elif choice == '5':
                self.check_balance()
            elif choice == '6':
                self.view_transactions()
            elif choice == '7':
                self.delete_account()
            elif choice == '8':
                self.display_all_accounts()
            elif choice == '9':
                print("\nThank you for using Bank Management System!")
                print("Exiting...")
                self.save_data()  # Final save before exit
                break
            else:
                print("❌ Invalid choice! Please enter 1-9")
            
            # Pause before showing menu again
            input("\nPress Enter to continue...")

# Main program execution
if __name__ == "__main__":
    # Create bank system instance
    bank = BankAccount()
    
    # Display welcome message
    print("\n" + "="*60)
    print("WELCOME TO BANK MANAGEMENT SYSTEM".center(60))
    print("="*60)
    
    # Start the menu system
    bank.menu()