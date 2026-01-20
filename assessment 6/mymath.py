"""CUSTOM MATH MODULE WITH BASIC MATHEMATICAL OPERATIONS"""
def add(a,b):
    """Return the sum of two numbers."""
    return a+b

def subtract(a,b):
    """Return the subtraction of two numbers."""
    return a-b

def multiply(a,b):
    """Return the product of two numbers."""
    return a*b

def divide(a,b):
    """Return the division of two numbers.
       Return none if dividing by zero.
    """
    if b == 0:
        print("Error : Division by Zero!")
        return None
    return a/b

def power(base,exponent):
    """Return base raised to the power of exponent."""
    return base ** exponent