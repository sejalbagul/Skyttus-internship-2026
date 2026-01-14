# PROGRAM TO REPLACE A WORD IN A FILE
old_word = input("Enter word to replace : ")
new_word = input("Enter new word : ")

file = open("example.txt","r")
text = file.read()
file.close()

text  = text.replace(old_word,new_word)

file = open("example.txt","w")
file.write(text)
file.close()

print("Word replaced successfully")
