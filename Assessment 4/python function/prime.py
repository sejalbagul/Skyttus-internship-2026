# FUNCTION TO CHECK PRIME NUMBER
def is_prime(n):
    if n <= 1:
        return False
    for i in range (2,n):
        if n % i ==0:
            return False
        return True

num = int(input("Enter number: "))
print(is_prime(num))