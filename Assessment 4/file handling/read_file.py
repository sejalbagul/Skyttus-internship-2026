# PROGRAM TO READ A FILE AND DISPLAY ITS CONTENTS 

file = open("example.txt","r")      #open file in read mode
content = file.read()               # read file content
print(content)                      # print content
file.close()                        # close file 
