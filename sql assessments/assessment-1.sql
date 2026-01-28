-- Database: python_db

-- DROP DATABASE IF EXISTS python_db;

CREATE DATABASE python_db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


-- Table: public.students

-- DROP TABLE IF EXISTS public.students;

CREATE TABLE IF NOT EXISTS public.students
(
    student_id integer NOT NULL,
    name character varying(50) COLLATE pg_catalog."default",
    department character varying(30) COLLATE pg_catalog."default",
    year integer,
    marks integer,
    CONSTRAINT students_pkey PRIMARY KEY (student_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.students
    OWNER to postgres;

-- INSERT DATA INTO TABLE 
INSERT INTO students(student_id,name,department,year,marks)VALUES
(1,'Sejal','IT',1,85),
(2,'Jinal','IT',2,78),
(3,'Payal','CSE',1,80),
(4,'Shital','ME',2,75),
(5,'Rinkal','CSE',1,95);

-- DISPLAY ALL TABLE RECORDS
SELECT * FROM students;

--DISPLAY ONLY NAME AND DEPARTMENT
SELECT name,department FROM students;

-- FIND STUDENTS WITH MARKS GREATER THAN 75
SELECT * FROM students WHERE marks>75;

-- DISPLAY STUDENTS FROM CSE DEPARTMENTS 
SELECT * FROM students WHERE department = 'CSE';

-- SORT STUDENTS BY MARKS(DESCENDING)
SELECT * FROM students ORDER BY marks DESC;

-- DISPLAY TOP 3 SCORERS
SELECT * FROM students ORDER BY marks DESC LIMIT 3;


