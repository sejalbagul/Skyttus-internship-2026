# PYTHON STRING HANDLING PROGRAMS 
#1. TAKE A STRING INPUT AND PRINT ITS LENGTH
text=input("Enter a string :")
print("Length:",len(text))

#2 CONVERT A SENTENCE TO LOWERCASE
sen=input("Enter a sentence : ")
print("Lowercase:",sen.lower())

#3 REPLACE SPACES WITH UNDERSCORES 
print("Underscore :",text.replace(" ","_"))

#4 EXTRACT FIRST AND LAST CHARACTER 
if(len(text)>0):
    print("First character:",text[0])
    print("Last character:",text[-1])

#5 REVERSE A STRING USING SLICING
str=input("Enter a string for reverse: ")
print("Reversed string:",str[::-1])

#6 COUNT HOW MANY TIMES A LETTER APPEARS
letter=input("Enter a letter to count: ")
print("Count: ",text.count(letter))

#7 CHECK IF A WORD IS PRESENT
word=input("Enter a word to check: ")
print("Word present:",word in text)

#8 TAKE NAME AND AGE AND PRINT USING F-STRING
name=input("Enter name: ")
age=int(input("Enter age: "))
print(f"My name is {name} and my age is {age}")

#9 Remove extra spaces from start and end 
space_text=input("Enter text with spaces: ")
print("Trimmed:",space_text.strip())

#10 JOIN LIST OF WORDS INTO SINGLE STRING 
words=["Python","is","easy"]
joined=" ".join(words)
print("Joined string:",joined)
