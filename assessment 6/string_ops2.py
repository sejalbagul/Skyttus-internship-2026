"""MODULE FOR PERFORMING VARIOUS STRING OPERATIONS"""
def reverse_string(text):
    """Return the reverse of the input string."""
    return text[::-1]

def count_vowels(text):
    """Count the number of vowels in a string(case -insensitive)"""
    vowels = 'aeiou'
    text_lower = text.lower()
    count = 0
    for char in text_lower:
        if char in vowels:
            count +=1
        return count
    
def count_consonants(text):
    """Count the number of consonants in a string (case- insensitive)"""
    consonants = 'bcdfghjklmnpqrstvwxyz'
    text_lower = text.lower()
    count = 0
    for char in text_lower:
        if char in consonants:
            count += 1
        return count
def is_palindrome(text):
    """Check if a string is a palindrome(reads same forwards and backwards)."""
    # Remove spaces and convert into lowercase for accurate comparison
    clean_text = text.replace(" ","").lower()
    return clean_text == clean_text[::-1]

def word_count (text):
    """Count the number of words in a string."""
    words = text.split()
    return len(words)

if __name__ == "__main__":
    test_string = "Hello World"
    print(f"Original string: {test_string}")
    print(f"Reversed : {reverse_string(test_string)}")
    print(f"Vowel count : {count_vowels(test_string)}")
    print(f"Consonant count : {count_consonants(test_string)}")
    print(f"Is palindrome? {is_palindrome('racecar')}")
    print(f"Word count : {word_count(test_string)}")