"""
Program to generate 5 random integers using the random module.
"""

# Step 1: Import the random module
import random

# Step 2: Generate 5 random integers between 1 and 100
print("Generating 5 random integers between 1 and 100:")
print("-" * 40)

# Method 1: Using a loop
print("Method 1: Using a for loop")
for i in range(5):
    random_num = random.randint(1, 100)
    print(f"Random number {i+1}: {random_num}")

print("-" * 40)

# Method 2: Using list comprehension
print("Method 2: Using list comprehension")
random_numbers = [random.randint(1, 100) for _ in range(5)]
for i, num in enumerate(random_numbers, 1):
    print(f"Random number {i}: {num}")

print("-" * 40)

# Method 3: Generate in a specific range with step
print("Method 3: Random numbers from a specific range")
# Generate 5 random odd numbers between 1 and 50
odd_numbers = [random.randrange(1, 50, 2) for _ in range(5)]
print(f"5 random odd numbers between 1 and 50: {odd_numbers}")