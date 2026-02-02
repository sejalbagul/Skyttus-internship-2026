-- Create Worker table
CREATE TABLE Worker (
    worker_id INT PRIMARY KEY,
    worker_name VARCHAR(100),
    salary DECIMAL(10, 2),
    hire_date DATE,
    department_id INT
);

-- Create Department table
CREATE TABLE Department (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100)
);

-- Create another table for comparison
CREATE TABLE Worker_Archive (
    worker_id INT PRIMARY KEY,
    worker_name VARCHAR(100),
    salary DECIMAL(10, 2),
    hire_date DATE,
    department_id INT
);

-- Create table for duplicate analysis
CREATE TABLE Sales (
    sale_id INT PRIMARY KEY,
    sale_date DATE,
    amount DECIMAL(10, 2),
    region VARCHAR(50)
);

--insert into worker table 
insert into worker values(1,'Sejal',50000,'01-01-2026',1),(2,'JInal',100000,'01-06-2025',1),(3,'Dhruvi',90000,'01-01-2026',1);

-- Insert departments
INSERT INTO Department (dept_id, dept_name) VALUES
(1, 'Engineering'),
(2, 'Sales'),
(3, 'Marketing'),
(4, 'Human Resources'),
(5, 'Finance');

-- Insert archived workers (some overlapping with current workers)
INSERT INTO Worker_Archive (worker_id, worker_name, salary, hire_date, department_id) VALUES
(1, 'Sejal', 50000, '2026-01-01', 1),      -- Same as current worker
(2, 'Jinal', 100000, '2025-06-01', 1),     -- Same as current worker  
(4, 'Rohan', 80000, '2023-03-15', 2),      -- Only in archive
(5, 'Priya', 75000, '2024-08-20', 3),      -- Only in archive
(6, 'Amit', 60000, '2023-11-30', 4);       -- Only in archive

-- Insert sales data with some continuous duplicates
INSERT INTO Sales (sale_id, sale_date, amount, region) VALUES
(1, '2024-01-01', 1000.00, 'North'),
(2, '2024-01-02', 1000.00, 'North'),       -- Duplicate of previous day
(3, '2024-01-03', 1500.00, 'South'),
(4, '2024-01-04', 1500.00, 'South'),       -- Duplicate of previous day  
(5, '2024-01-05', 1500.00, 'South'),       -- 3 consecutive duplicates
(6, '2024-01-06', 1200.00, 'East'),
(7, '2024-01-07', 1200.00, 'East'),       -- Duplicate of previous day
(8, '2024-01-08', 1800.00, 'West'),
(9, '2024-01-09', 1800.00, 'West'),       -- Duplicate of previous day
(10, '2024-01-10', 2000.00, 'North');


--1- QUERY TO FIND NTH HIGHEST SALARY
-- Using a CTE to set the N value
WITH nth_param AS (
    SELECT 3 AS n  -- Change this to any number
)
SELECT DISTINCT salary
FROM Worker
ORDER BY salary DESC
LIMIT 1 OFFSET (SELECT n-1 FROM nth_param);

--3- COMMON RECORDS IN TWO TABLES
-- Workers present in both Worker and Worker_Archive
SELECT w.*
FROM Worker w
INNER JOIN Worker_Archive wa ON w.worker_id = wa.worker_id;

--2 - FIND CONTINUOUS DUPLICATE VALUES
-- Find consecutive days with same sales amount
WITH CTE AS (
    SELECT 
        sale_date,
        amount,
        LAG(amount) OVER (ORDER BY sale_date) as prev_amount,
        LAG(sale_date) OVER (ORDER BY sale_date) as prev_date
    FROM Sales
)
SELECT sale_date, amount
FROM CTE
WHERE amount = prev_amount
AND sale_date - prev_date = 1;


--4 FIND EMPLOYEES HIRED IN LAST 6 MONTHS
SELECT *
FROM Worker
WHERE hire_date >= CURRENT_DATE - INTERVAL '6 months';

--5 CONTINUOUS DUPLICATE VALUES
WITH CTE AS (
    SELECT
        sale_date,
        amount,
        LAG(amount) OVER (ORDER BY sale_date) AS prev_amount,
        LAG(sale_date) OVER (ORDER BY sale_date) AS prev_date
    FROM Sales
)
SELECT sale_date, amount
FROM CTE
WHERE amount = prev_amount
AND sale_date - prev_date = 1;
