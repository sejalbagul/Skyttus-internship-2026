# PROGRAM TO  MERGE TWO FILES INTO A THIRD FILE

file1 = open("example.txt","r")
file2 = open("test.txt","r")
file3 = open("merged.txt","w")

file3.write(file1.read())
file3.write(file2.read())

file1.close()
file2.close()
file3.close()

print("Files merged successfully")
