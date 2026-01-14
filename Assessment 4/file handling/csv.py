# PROGRAM TO READ CSV FILE
file = open("data.csv","r")

for line in file:
    data = line.strip().split(",")
    print(data)

file.close()