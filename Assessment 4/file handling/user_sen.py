# PROGRAM TO WRITE 5 SENTENCES ENTERED BY USER INTO FILE 
file = open("sentences.txt","w")

for i in range(5):
    sentence = input("Enter sentence :")
    file.write(sentence +"\n")

file.close()
print("Sentences saved successfully")