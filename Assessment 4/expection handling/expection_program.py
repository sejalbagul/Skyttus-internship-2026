# 1. HANDLE DIVISION BY ZERO ERROR
def  division_by_zero(a,b):
    try:
        result =a/b
        print("Result: ",result)
    except ZeroDivisionError:
        print("Error : Cannot divide by zero ")

# 2. Handle invalid integer input
def invalid_integer():
    try:
        num= int(input("Enter an integer : "))
        print("You entered : ",num)
    except ValueError:
        print("Error : Invalid integer input")

# 3. HANDLE FILE NOT FOUND ERROR
def file_not_found(filename):
    try:
        file=open(filename,"r")
        print(file.read())
        file.close()
    except FileNotFoundError:
        print("Error: File not found")

# 4. DEMONSTRATE MULTIPLE EXCEPTIONS BLOCKS 
def multiple_exceptions():
    try:
        a= int(input("Enter number: "))
        b= int(input("enter number: "))
        print(a/b)
    except ZeroDivisionError:
        print("Error: Divison by zero")
    except ValueError:
        print("Error: Invalid input")
    except Exception:
        print("Error: Something went wrong")

# 5. USE FINALLY FOR RESOURCE CLEANUP
def finally_example(filename):
    try:
        file=open(filename,"r")
        print(file.read())
    except FileNotFoundError:
        print("File not found")
    finally:
        #This will always execute
        print("Closing file if opened")

# 6. CUSTOM EXCEPTION FOR INVALID AGE(<18)
def check_age(age):
    if age < 18:
        raise Exception("Invalid age: Age must be 18 or above ")
    else:
        print("Age is valid ")

# 7. HANDLE INDEXERROR WHEN ACCESSING A LIST
def index_error_example():
    try:
        my_list =[10,20,30]
        print(my_list[5])
    except IndexError:
        print("Error : Index out of range ")

# 8. HANDLE ALL POSSIBLE ERRORS FOR TWO NUMBERS
def handle_all_errors():
    try:
        a=int(input("Enter first number: "))
        b=int(input("Enter second number: "))
        print(a/b)
    except ZeroDivisionError:
        print("Error: Division by zero")
    except ValueError:
        print("Error: Invalid number input")
    except Exception:
        print("Error : Unknown error ")

# 9. LOG ERRORS TO A FILE INSTEAD OF PRINTING
def log_error():
    try:
        a=int("abc")
    except Exception as e:
        with open("error.log","a")as file:
            file.write(str(e)+"\n")

# 10. VALIDATE EMAIL FORMAT AND RAISE EXCEPTION
def validate_email(email):
    try:
        if "@" not in email or "." not in email:
            raise Exception("Invalid email format")
        else:
            print("Email is valid")
    except Exception as e:
        print(e)

# MAIN PART 
division_by_zero(10,0)
#invalid integer()
file_not_found("example.txt")
#multiple_exceptions()
finally_example("example.txt")

try:
    check_age(16)
except Exception as e:
    print(e)

index_error_example()
#handle_all_errors()
log_error()
validate_email("testgmail.com")
