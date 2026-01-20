"""
Circle module for calculating circle properties.
"""

# Import math module for pi constant
import math

def area(radius):
    """Calculate area of a circle."""
    return math.pi * radius ** 2

def circumference(radius):
    """Calculate circumference of a circle."""
    return 2 * math.pi * radius

def diameter(radius):
    """Calculate diameter of a circle."""
    return 2 * radius
