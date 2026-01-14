# PROGRAM TO COUNT NUMBER OF LINES IN A FILE

file = open("example.txt","r")
lines = file.readlines() # read all lines
print("Total lines : ",len(lines))
file.close()

