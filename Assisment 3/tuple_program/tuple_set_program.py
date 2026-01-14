# 1 CREATE A TUPLE WITH 5 NUMBERS 
num=(24,27,10,93,1)
print("Tuple:",num)

# 2 ACCESS THIRD ELEMENT
print("Third element:",num[2])

# 3 UNPACK TUPLE
a, b, c, d, e=num
print("Unpacked values:",a,b,c,d,e)

# 4 CREATE A SET OF 5 FRUITS
fruits={"Strawberry","Raspberry","Blue-berry","Mulberry","Cherry"}
print("Fruits set:",fruits)

# 5 ADD NEW FRUIT
fruits.add("Pomegranate")
print("After adding:", fruits)


# 6 REMOVE AN ELEMENT 
fruits.remove("Cherry")
print("After removing:",fruits)

# 7 UNION OF TWO SETS 
set1={24,27,10,26}
set2={93,1,26,10}
print("Union:",set1 | set2)

# 8 Intersection of two sets
print("Intersection:",set1 & set2)

# 9 Check subset
print("Is subset:",{1,2}.issubset(set1))

# 10 REMOVE DUPLICATES USING SET
dup_list=[24,10,27,10,93,1]
unique=list(set(dup_list))
print("unique values:",unique)
