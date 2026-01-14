# PROGRAM TO PRINT LINES CONTAINING A SPECIFIC WORD
word = input("Enter word to search: ")
file =open("example.txt","r")

for line in file:
    if word in line:
        print(line)

file.close()
