"""Program to demonstrate how to use the custom math module."""
# Import the custom math moodule
import mymath
# Addition
result =mymath.add(24,27)
print(f"24 + 27 = {result}")

# Substraction
result =mymath.subtract(24,10)
print(f"24 - 10 = {result}")

# Multiplication
result = mymath.multiply(24,6)
print(f"24 * 6 = {result}")

# Division
result = mymath.divide(24,4)
print(f"24 / 4 = {result}")

# Division
result = mymath.divide(10,0)
print(f"10 / 0 = {result}")

# power
result = mymath.power(2,3)
print(f"2^3 = {result}")
