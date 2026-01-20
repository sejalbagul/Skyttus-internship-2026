"""
Program to shuffle a list using random module.
"""

# Step 1: Import random module
import random

# Step 2: Function to demonstrate different shuffling methods
def demonstrate_shuffling(original_list):
    """Demonstrate different ways to shuffle a list."""
    
    print(f"Original list: {original_list}")
    print("-" * 40)
    
    # Method 1: random.shuffle() - shuffles in place
    list1 = original_list.copy()
    random.shuffle(list1)
    print(f"Method 1 - random.shuffle(): {list1}")
    
    # Method 2: random.sample() - returns a new shuffled list
    list2 = random.sample(original_list, len(original_list))
    print(f"Method 2 - random.sample(): {list2}")
    
    # Method 3: Using sorted() with random.random() as key
    list3 = sorted(original_list, key=lambda x: random.random())
    print(f"Method 3 - sorted with random key: {list3}")
    
    return list1, list2, list3

# Step 3: Test with different types of lists
print("List Shuffling Demo")
print("=" * 50)

# Test 1: List of numbers
print("\nTest 1: Shuffling Numbers")
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
shuffled_numbers = demonstrate_shuffling(numbers)

print("\n" + "=" * 50)

# Test 2: List of strings
print("\nTest 2: Shuffling Strings")
fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape']
shuffled_fruits = demonstrate_shuffling(fruits)

print("\n" + "=" * 50)

# Test 3: List of mixed types
print("\nTest 3: Shuffling Mixed Types")
mixed = ['hello', 42, 3.14, True, 'world', 100, False]
shuffled_mixed = demonstrate_shuffling(mixed)

print("\n" + "=" * 50)

# Interactive example
print("\nInteractive Card Shuffling")
print("-" * 40)

# Create a deck of cards
suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

deck = [f"{rank} of {suit}" for suit in suits for rank in ranks]

print(f"Full deck has {len(deck)} cards")
print("\nFirst 5 cards of unshuffled deck:")
for card in deck[:5]:
    print(f"  {card}")

# Shuffle the deck
random.shuffle(deck)

print("\nFirst 5 cards of shuffled deck:")
for card in deck[:5]:
    print(f"  {card}")

# Deal 5 cards
print("\nDealing 5 cards:")
for i in range(5):
    print(f"  Card {i+1}: {deck[i]}")