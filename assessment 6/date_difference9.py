"""
Program to calculate the difference between two dates.
"""

# Step 1: Import datetime module
import datetime

# Step 2: Function to calculate difference between two dates
def calculate_date_difference(date1, date2):
    """
    Calculate difference between two dates.
    Returns difference in days, weeks, months and years.
    """
    # Ensure date2 is later than date1 for positive difference
    if date2 < date1:
        date1, date2 = date2, date1
    
    # Calculate difference
    delta = date2 - date1
    
    # Extract days
    days = delta.days
    
    # Calculate weeks
    weeks = days // 7
    remaining_days = days % 7
    
    # Calculate approximate months and years
    # Note: This is approximate as months have varying lengths
    years = days // 365
    months = (days % 365) // 30
    
    return days, weeks, remaining_days, months, years

# Step 3: Function to get date input from user
def get_date_from_user(prompt):
    """Get a valid date from user input."""
    while True:
        try:
            date_str = input(prompt + " (YYYY-MM-DD): ")
            year, month, day = map(int, date_str.split('-'))
            return datetime.date(year, month, day)
        except (ValueError, AttributeError):
            print("Invalid date format. Please use YYYY-MM-DD format.")

# Step 4: Main program
print("Date Difference Calculator")
print("=" * 50)

# Get dates from user
print("\nEnter first date:")
date1 = get_date_from_user("Date 1")

print("\nEnter second date:")
date2 = get_date_from_user("Date 2")

# Calculate difference
days, weeks, remaining_days, months, years = calculate_date_difference(date1, date2)

# Display results
print("\n" + "=" * 50)
print("RESULTS")
print("=" * 50)

print(f"\nDate 1: {date1}")
print(f"Date 2: {date2}")

print(f"\nDifference in days: {days:,} days")
print(f"Difference in weeks: {weeks} weeks and {remaining_days} days")
print(f"Approximate difference: {years} years and {months} months")

print("\n" + "=" * 50)

# Additional calculations
print("\nADDITIONAL CALCULATIONS")
print("-" * 40)

# Calculate total hours, minutes, seconds
total_hours = days * 24
total_minutes = total_hours * 60
total_seconds = total_minutes * 60

print(f"Total hours: {total_hours:,}")
print(f"Total minutes: {total_minutes:,}")
print(f"Total seconds: {total_seconds:,}")

# Check if it's a leap year difference
print(f"\nDate range includes leap years: ", end="")
# Count leap years in the range
leap_year_count = 0
for year in range(date1.year, date2.year + 1):
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        leap_year_count += 1

if leap_year_count > 0:
    print(f"Yes ({leap_year_count} leap years)")
else:
    print("No")

print("\n" + "=" * 50)

# Example with predefined dates
print("\nPREDEFINED EXAMPLES")
print("-" * 40)

# Example 1: Birthdate to today
birthdate = datetime.date(1990, 1, 1)
today = datetime.date.today()
bd_days, bd_weeks, bd_remaining, bd_months, bd_years = calculate_date_difference(birthdate, today)

print(f"\nExample 1: From {birthdate} to {today}")
print(f"  Age: {bd_years} years, {bd_months} months")
print(f"  Total days lived: {bd_days:,} days")

# Example 2: Project deadline
start_date = datetime.date(2024, 1, 1)
end_date = datetime.date(2024, 12, 31)
proj_days, proj_weeks, proj_remaining, proj_months, proj_years = calculate_date_difference(start_date, end_date)

print(f"\nExample 2: Project from {start_date} to {end_date}")
print(f"  Duration: {proj_days} days ({proj_weeks} weeks)")