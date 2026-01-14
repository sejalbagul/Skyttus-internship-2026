# FUNCTION TO CALCULATE SIMPLE INTEREST 
def simple_interest(p, r, t):
    return (p * r * t)/100
p = float(input("Enter principal : "))
r = float(input("Enter rate : "))
t = float(input("Enter time : "))

print(simple_interest(p, r, t))