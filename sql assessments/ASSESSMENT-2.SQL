-- ASSESSMENT 2 : FUNCTIONS & AGGREGATION
--TABLE: STUDENTS


--1 COUNT TOTAL NUMBER OF STUDENTS
select count(*) as total_students from students;

--2 FIND AVERAGE MARKS OF STUDENTS
SELECT AVG(marks) AS average_marks FROM students;

--3 FIND HIGHEST AND LOWEST MARKS
SELECT MAX(marks) AS HIGHEST_MARKS, MIN(marks) AS LOWEST_MARKS FROM students;

--4 FIND DEPARTMENT WISE AVERAGE MARKS
SELECT department, AVG(marks) as avg_marks FROM students GROUP BY department;

--5 DISPLAY DEPARTMENTS WHERE AVERAGE MARKS>70
SELECT department, AVG(marks) AS avg_marks FROM students GROUP BY department HAVING AVG(marks)>70;
