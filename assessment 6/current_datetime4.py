"""
Program to display current date and time using datetime module.
"""

# Step 1: Import the datetime module
import datetime

# Step 2: Get current date and time
current_datetime = datetime.datetime.now()

print("Current Date and Time")
print("-" * 30)

# Display in default format
print(f"Default format: {current_datetime}")

print("-" * 30)

# Display in formatted string
print("Formatted display:")
print(f"Date: {current_datetime.strftime('%Y-%m-%d')}")
print(f"Time: {current_datetime.strftime('%H:%M:%S')}")
print(f"Day: {current_datetime.strftime('%A')}")
print(f"Month: {current_datetime.strftime('%B')}")
print(f"Year: {current_datetime.strftime('%Y')}")

print("-" * 30)

# Separate date and time components
print("Individual components:")
print(f"Year: {current_datetime.year}")
print(f"Month: {current_datetime.month}")
print(f"Day: {current_datetime.day}")
print(f"Hour: {current_datetime.hour}")
print(f"Minute: {current_datetime.minute}")
print(f"Second: {current_datetime.second}")
print(f"Microsecond: {current_datetime.microsecond}")

print("-" * 30)

# Display in different formats
print("Different date formats:")
print(f"DD/MM/YYYY: {current_datetime.strftime('%d/%m/%Y')}")
print(f"MM-DD-YYYY: {current_datetime.strftime('%m-%d-%Y')}")
print(f"YYYY/MM/DD: {current_datetime.strftime('%Y/%m/%d')}")

print("-" * 30)

# Display in different time formats
print("Different time formats:")
print(f"12-hour format: {current_datetime.strftime('%I:%M:%S %p')}")
print(f"24-hour format: {current_datetime.strftime('%H:%M:%S')}")