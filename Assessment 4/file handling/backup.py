# PROGRAM TO CREATE BACKUP OF A FILE

source = open("example.txt","r")
backup = open("backup.txt","w")

backup.write(source.read())

source.close()
backup.close()

print("Backup created successfully")