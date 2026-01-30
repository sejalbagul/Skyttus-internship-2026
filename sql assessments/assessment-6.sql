--CREATE ACCOUNTS TABLE
CREATE TABLE accounts (
    account_id INT PRIMARY KEY,
    account_holder VARCHAR(50),
    balance INT
);

-- INSERT VALUES IN ACCOUNTS TABLE
INSERT INTO accounts VALUES
(1, 'Sejal', 5000),
(2, 'Jinal', 3000),
(3, 'Payal', 7000);

--START A TRANSACTION
BEGIN;

--INSERT RECORD INTO ACCOUNTS
INSERT INTO accounts VALUES (4, 'Dhruvi', 4000);

--ROLLBACK CHANGES
ROLLBACK;

--COMMIT VALID TRANSACTION 
BEGIN;

INSERT INTO accounts VALUES (4, 'Dhruvi', 4000);

COMMIT;

--DEMONSTRATE MONEY TRANSFER USING TRANSACTION 


BEGIN;

-- SUBTRACT FROM SEJAL
UPDATE accounts
SET balance = balance - 1000
WHERE account_id = 1;

-- ADD MONEY TO JINAL
UPDATE accounts
SET balance = balance + 1000
WHERE account_id = 2;

COMMIT;
