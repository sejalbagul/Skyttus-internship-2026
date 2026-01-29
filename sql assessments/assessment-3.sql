--create departments table
CREATE TABLE departments(dept_id INT PRIMARY KEY, dept_name VARCHAR(50));

--CREATE EMPLOYEES TABLE
CREATE TABLE employees(emp_id INT PRIMARY KEY, emp_name VARCHAR(50),dept_id INT,salary INT,FOREIGN KEY(dept_id) REFERENCES departments(dept_id));


--INSERT INTO DEPARTMENTS TABLE VALUES
INSERT INTO departments VALUES(1,'Engineering'),(2,'HR'),(3,'Sales'),(4,'Marketing'),(5,'IT');

--INSERT INTO EMPLOYEES TABLE

INSERT INTO employees VALUES(101,'Sejal',1,50000),(2,'Jinal',2,55000),(3,'Dhruvi',1,52000),(4,'Payal',2,60000),(5,'Jagruti',4,45000),(6,'Shital',1,51000),(7,'Sita',2,55000),(8,'Priti',3,52000),(9,'Rinkal',3,60000),(10,'Pinkal',5,45000);

--1 DISPLAY EMPLOYEE NAME WITH DEPARTMENT NAME
select e.emp_name,d.dept_name from employees e LEFT JOIN departments d ON e.dept_id =d.dept_id;

--2 DISPLAY EMPLOYEE EARNING MORE THAN 50,000
SELECT emp_id,emp_name,salary FROM employees WHERE salary>50000;

--3 DISPLAY DEPARTMENT WISE TOTAL SALARY
SELECT d.dept_name,SUM(e.salary) AS total_salary FROM employees e INNER JOIN departments d ON e.dept_id =d.dept_id GROUP BY d.dept_name;

--4 DISPLAY DEPARTMENTS WITH MORE THAN 2 EMPLOYEES
SELECT d.dept_name,COUNT(e.emp_id) AS employee_count FROM departments d INNER JOIN employees e ON d.dept_id = e.dept_id GROUP BY d.dept_name HAVING COUNT(e.emp_id)>2;

--5 DISPLAY EMPLOYEES WITHOUT A DEPARTMENT 
SELECT emp_id,emp_name,salary FROM employees WHERE dept_id IS NULL;
