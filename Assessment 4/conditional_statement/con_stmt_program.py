# 1. VOTE ELIGIBILITY
age=32
print(f"1. Age : {age}")
if age>=18:
    print("Eligible to vote")
else:
    print("Not eligible to vote")

print("\n" + "="*32)

# 2 . GRADE CALCULATOR
marks = 85
print(f"2. Marks : {marks}")
if marks >=90:
    grade ="A"
elif marks>=80:
    grade ="B"
else :
    grade ="C"
print(f"Grade : {grade}")

print("\n" + "="*32)

# 3. Traffic light
light = "green"
print(f"3. Traffic light : {light}")

if light =="red":
    print(" Action : Stop ")
elif light =="yellow":
    print(" Action : Wait ")
else:
    print(" Action : Go ")

print("\n" + "="*32)

# 4. ATM WITHDRAWAL
balance =5000
withdrawal=3000
print(f"4. Balance : {balance}, Withdrawal : {withdrawal}")
if withdrawal<=balance:
    print("Withdrawal successful")
else:
    print("Insufficient balance")

print("\n" + "="*32)

# 5. CHECK WHETHER NUMBER IS POSITIVE, NEGATIVE OR ZERO 
num = 6
print(f"5. Number : {num}")
if num > 0 :
    print("Positive ")
elif num < 0:
    print("Negative")
else:
    print("Zero")

print("\n" + "="*32)

# 6. RANGE CHECK 
num=24
start=10
end=50
print(f"6. Number : {num}, Range:{start} to {end}")
if start <=num <=end:
    print(" Within range")
else: 
    print(" Out of range")

print("\n" + "="*32)

# 7. USERNAME & PASSWORD 
username ="admin"
password="5110"
print(" 7. Login check : ")
if username=="admin" and password =="5110":
    print(" Login successful")
else:
    print("Login failed")

print("\n" + "="*32)

# 8. Electricity bill
units =246
print(f"8. Electricity units : {units}")
if units <=100:
    bill=units*2
elif units <=200:
    bill=100*2+(units-100)*3
else:
    bill=100*2+100*3+(units-200)*5
print(f" Bill : {bill}")

print("\n" + "="*32)

# 9. Simple calculator
a=24
b=10
op="+"
print(f"9. Calculator : {a} {op} {b}")
if op=="+":
    result=a+b
elif op=="-":
    result=a-b
elif op=="*":
    result=a*b
elif op=="/":
    if b!=0:
        result=a/b
    else:
        result="Invalid operator"
    print(f" Result : {result}")
    
print("\n" + "="*32)

# 10. TYPE OF TRIANGLE 
side1=6
side2=4
side3=2
print(f"10. Triangle sides : {side1},{side2},{side3}")
if side1==side2==side3:
    print(" Equilateral triangle ")
elif side1==side2 or side2==side3 or side1==side3:
    print(" Isosceles triangle")
else:
    print(" Scalene triangle")

print("\n" + "="*32)
