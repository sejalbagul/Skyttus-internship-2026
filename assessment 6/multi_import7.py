"""
Demonstrating how to import multiple functions from one module.
"""

# Method 1: Import specific functions (including atan)
from math import sqrt, pow, sin, cos, tan, degrees, radians, atan

# Method 2: Import with aliases
from math import factorial as fact, log10 as lg

print("Multiple Imports from Math Module")
print("=" * 50)

# Using the imported functions
print("1. Basic Operations:")
print(f"Square root of 25: {sqrt(25)}")
print(f"2 raised to power 3: {pow(2, 3)}")

print("\n2. Trigonometric Functions (in radians):")
angle_rad = radians(45)  # Convert 45 degrees to radians
print(f"sin(45°): {sin(angle_rad):.4f}")
print(f"cos(45°): {cos(angle_rad):.4f}")
print(f"tan(45°): {tan(angle_rad):.4f}")

# Convert back to degrees
print(f"\n{angle_rad:.4f} radians in degrees: {degrees(angle_rad)}°")

print("\n3. Other Functions:")
print(f"Factorial of 5: {fact(5)}")
print(f"Log base 10 of 100: {lg(100)}")

print("\n" + "=" * 50)

# Import multiple functions at once
print("Importing Multiple Functions in One Line:")
from math import pi, e, floor, ceil

print(f"Value of pi: {pi}")
print(f"Value of e: {e}")
print(f"Floor of 3.7: {floor(3.7)}")
print(f"Ceil of 3.2: {ceil(3.2)}")

print("\n" + "=" * 50)

# Practical example: Calculate triangle properties
print("Practical Example: Right Triangle Calculations")
print("-" * 40)

base = 3
height = 4

# Calculate hypotenuse using Pythagorean theorem
hypotenuse = sqrt(pow(base, 2) + pow(height, 2))
print(f"Base: {base}, Height: {height}")
print(f"Hypotenuse: {hypotenuse:.2f}")

# Calculate angles using arctangent (atan) - corrected line
angle_a = degrees(atan(height / base))
angle_b = 90 - angle_a
print(f"Angle A: {angle_a:.1f}°")
print(f"Angle B: {angle_b:.1f}°")