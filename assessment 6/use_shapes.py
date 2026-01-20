"""
Program to use the shapes package.
"""

# Method 1: Import entire modules
import circle
import rectangle

# Method 2: Import specific functions
from circle import area as circle_area, circumference
from rectangle import area as rectangle_area, perimeter

print("Shapes Package Demo")
print("=" * 40)

# Circle calculations
radius = 5
print("CIRCLE CALCULATIONS")
print("-" * 40)
print(f"Radius: {radius}")

# Using module name
print("\nUsing module name:")
print(f"Area: {circle.area(radius):.2f}")
print(f"Circumference: {circle.circumference(radius):.2f}")
print(f"Diameter: {circle.diameter(radius)}")

# Using imported functions
print("\nUsing imported functions:")
print(f"Area: {circle_area(radius):.2f}")
print(f"Circumference: {circumference(radius):.2f}")

print("\n" + "=" * 40)

# Rectangle calculations
length = 6
width = 4
print("RECTANGLE CALCULATIONS")
print("-" * 40)
print(f"Length: {length}, Width: {width}")

# Using module name
print("\nUsing module name:")
print(f"Area: {rectangle.area(length, width)}")
print(f"Perimeter: {rectangle.perimeter(length, width)}")
print(f"Is square? {rectangle.is_square(length, width)}")

# Using imported functions
print("\nUsing imported functions:")
print(f"Area: {rectangle_area(length, width)}")
print(f"Perimeter: {perimeter(length, width)}")

print("\n" + "=" * 40)

# Calculate for a square
square_side = 5
print("SQUARE CALCULATIONS")
print("-" * 40)
print(f"Side: {square_side}")
print(f"Area: {rectangle.area(square_side, square_side)}")
print(f"Perimeter: {rectangle.perimeter(square_side, square_side)}")
print(f"Is square? {rectangle.is_square(square_side, square_side)}")