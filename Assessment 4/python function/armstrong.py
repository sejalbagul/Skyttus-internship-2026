# FUNCTION TO CHECK ARMSTRONG NUMBER

def is_armstrong(num):
    total = 0
    temp = num
    digits = len(str(num))

    while temp > 0:
        digit = temp % 10
        total += digit ** digits
        temp //=10

    return total == num

num = int(input("Enter number : "))
print(is_armstrong(num))