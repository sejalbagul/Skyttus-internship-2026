# 1 CREATE DICTIONARY OF STUDENT MARKS
students = {"Sejal":85, "Swetal":90}
print("Students marks: ",students)

# 2 ADD NEW KEY- VALUE
students["Rinkal"] = 80
print("After adding:",students)

# 3 DELETE A KEY-VALUE
del students["Swetal"]
print("After deletion: ",students)

# 4 MERGE TWO DICTIONARIES
dict1 = {"a":1}
dict2 = {"b":2}
merged = dict1|dict2
print("Merged dictionary :",merged)

# 5 CHECK IF KEY EXISTS
print("Key exits:","Sejal" in students)

# 6 COUNT WORD FREQUENCY
sentence = "I am learning python coding"
words = sentence.split()
freq= {}
for n in words:
    freq[n]=freq.get(n,0)+1
print("Word frequency: ",freq)

# 7 FIND KEY WITH MAXIMUM VALUE
print("Max value key:",max(students,key=students.get))

# 8 REVERSE KEYS AND VALUES 
reversed_dict={v:k for k,v in students.items()}
print("Reversed dict:",reversed_dict)

# 9 UPDATE VALUE FOR A KEY
students["Sejal"] = 90
print("Updated marks:",students)

# 10 CONVERT LIST OF TUPLES INTO DICTIONARY 
tuple_list = [("x",10),("y",24)] 
print("Dictionary:",dict(tuple_list))