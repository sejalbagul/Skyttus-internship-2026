# FUNCTION TO CHECK PALINDROME

def is_palindrome(word):
    return word == word[::-1]

text = input("Enter word : ")
print(is_palindrome(text))