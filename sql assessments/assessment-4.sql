--FIND EMPLOYEES EARNING MORE THAN AVERAGE SALARY
SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);

--FIND DEPARTMENT WITH HIGHEST TOTAL SALARY
SELECT d.dept_name, SUM(e.salary) AS total_salary
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
GROUP BY d.dept_name
ORDER BY total_salary DESC
LIMIT 1;

--DISPLAY EMPLOYEE WITH SECOND HIGHEST SALARY
SELECT *
FROM employees
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
    WHERE salary < (SELECT MAX(salary) FROM employees)
);

--DISPLAY EMPLOYEES WORKING IN SAME DEPARTMENT AS "AMIT"
SELECT *
FROM employees
WHERE dept_id = (
    SELECT dept_id
    FROM employees
    WHERE emp_name = 'AMIT'
);