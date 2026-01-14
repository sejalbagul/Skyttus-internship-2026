#1 CREATE A LIST OF 5 FAVORITE MOVIES
movies=["THE LION KING","FROZEN","MINIONS","CARS","KUNG FU PANDA"]
print("Movies:",movies)

#2 ADD A NEW MOVIE 
movies.append("TOY STORY")
print("After adding :",movies)

#3 REMOVE THE FIRST MOVIE
movies.pop(0)
print("After removing first:",movies)

#4 SORT A LIST OF NUMBERS
numbers=[5,2,8,1,3]
numbers.sort()
print("Sorted numbers:",numbers)

#5 REVERSE A LIST
numbers.reverse()
print("Reversed list:",numbers)

#6 FIND LARGEST NUMBER
print("Largest number:",max(numbers))

#7 MERGE TWO LISTS
list1=[1,2,3]
list2=[4,5,6]
merged= list1 + list2
print("Merged list:",merged)

#8 ACCESS LAST ELEMENT USING INDEX
print("Last element :",merged[-1])

#9 CREATE NESTED LIST AND ACCESS ELEMENT
nested=[[1,2],[3,4]]
print("Nested element:",nested[1][0])

#10 COUNT ELEMENT FREQUENCY
count_list=[1,2,2,4,6]
print("Count of 2:",count_list.count(2))