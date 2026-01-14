# PROGRAM TO APPEND STRINGS TO AN EXISTING FILE
items =["Strawberry","Raspberry","Mulberry"]

file = open("items.txt","a")

for item in items:
    file.write(item +"\n")

file.close()
print("Data appended successfully !")
