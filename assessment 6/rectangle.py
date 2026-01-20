"""
Rectangle module for calculating rectangle properties.
"""

def area(length, width):
    """Calculate area of a rectangle."""
    return length * width

def perimeter(length, width):
    """Calculate perimeter of a rectangle."""
    return 2 * (length + width)

def is_square(length, width):
    """Check if rectangle is a square."""
    return length == width