# 1.PRINT NUMBERS FROM 1 TO 10
print("1. Numbers from 1 to 10.")
for i in range(1,11):
    print(i,end="")

print("\n" + "="*40)

#2.MULTIPLICATION TABLE 
num=10
print(f"2.Multiplication table of {num}:")
for i in range(1,11):
    print(f"{num} x {i}={num*i}")

print("\n" + "="*40)   

# 3. FACTORIAL
n=6
fact=1
for i in range(1,n+1):
    fact*=i
print(f"3.Factorial of {n}={fact}")

print("\n" + "="*40)

# 4.FIBONACCI NUMBERS
n=10
print(f"4.First{n} Fibonacci numbers.")
a,b=0,1
for _ in range(n):
    print(a,end="")
    a,b=b,a+b

print("\n" + "="*40)

# 5. PRIME CHECK
n=13
is_prime =True
for i in range(2,n):
    if n%i==0:
        is_prime=False
        break
print(f"5. Is {n} prime?{is_prime}")

print("\n" + "="*40)

# 6. REVERSE NUMBER 
num = 12345
reversed_num=int(str(num)[::-1])
print(f"6.{num} reversed ={reversed_num}")

print("\n" + "="*40)

# 7. COUNT DIGITS 
num=987654321
count=len(str(num))
print(f"7.{num} has{count} digits")

print("\n" + "="*40)

# 8. SUM OF EVEN NUMBERS 1-100
sum=0
for i in range (2, 101, 2):sum+=i
print(f"8. Sum of even numbers 1-100={sum}")

print("\n" + "="*40)

# 9. Pyramid pattern
print("9. Pyramid pattern:")
rows=5
for i in range(1,rows+1):
    print(" "*(rows-i)+"*"*(2*i-1))

print("\n" + "="*40)

# 10 . ALL DIVISORS
n=24
print(f"10.Divisors of {n}:")
for i in range(1,n+1):
    if n % i == 0:
        print(i,end=" ")
    print()

print("\n" + "="*40)

