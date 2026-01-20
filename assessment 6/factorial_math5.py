"""
Program to find factorial of a number using math module.
"""

# Step 1: Import the math module
import math

# Step 2: Function to calculate factorial
def calculate_factorial(n):
    """
    Calculate factorial of a number using math.factorial().
    Also shows manual calculation for comparison.
    """
    if n < 0:
        return "Factorial is not defined for negative numbers."
    
    # Method 1: Using math.factorial()
    result_math = math.factorial(n)
    
    # Method 2: Manual calculation (for comparison)
    result_manual = 1
    for i in range(1, n + 1):
        result_manual *= i
    
    return result_math, result_manual

# Step 3: Get input from user
print("Factorial Calculator")
print("-" * 30)

# Get valid input from user
while True:
    try:
        num = int(input("Enter a non-negative integer: "))
        if num < 0:
            print("Please enter a non-negative integer.")
            continue
        break
    except ValueError:
        print("Invalid input. Please enter an integer.")

# Step 4: Calculate and display result
math_result, manual_result = calculate_factorial(num)

print("-" * 30)
print(f"Factorial of {num}:")
print(f"Using math.factorial(): {math_result}")
print(f"Manual calculation: {manual_result}")

# Verify both methods give same result
if math_result == manual_result:
    print("✓ Both methods give the same result!")
else:
    print("✗ Results don't match!")

print("-" * 30)

# Show factorial of first 10 numbers
print("Factorials of numbers 0 to 10:")
for i in range(11):
    print(f"{i}! = {math.factorial(i)}")