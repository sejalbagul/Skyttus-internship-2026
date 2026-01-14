# PROGRAM TO COUNT WORD FREQUENCY IN A FILE
file = open("example.txt","r")
text = file.read().lower() # read text and conver to lowercase
words = text.split()        # split into words 
for word in set(words):
    print(word,":",words.count(word))
file.close()
