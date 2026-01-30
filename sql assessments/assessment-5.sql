--CREATE USERS TABLE
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(50) NOT NULL
);

--CREATE ORDERS TABLE
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    order_amount INT,
    order_date DATE,
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
);

--INSERT INTO USERS TABLE
INSERT INTO users VALUES
(1, 'Sejal', 'sejal@gmail.com', 'pass123'),
(2, 'Jinal', 'jinal@gmail.com', 'pass456'),
(3, 'Payal', 'payal@gmail.com', 'pass789');

--INSERT INTO ORDERS TABLE
INSERT INTO orders VALUES
(101, 1, 5000, '2024-01-10'),
(102, 1, 3000, '2024-01-15'),
(103, 2, 7000, '2024-01-20'),
(104, 3, 2000, '2024-01-25');


--CREATE INDEX ON EMAIL
CREATE INDEX idx_users_email
ON users(email);

--CREATE VIEW

CREATE VIEW user_order_summary AS
SELECT
    u.user_id,
    u.name,
    u.email,
    COUNT(o.order_id) AS total_orders,
    SUM(o.order_amount) AS total_amount
FROM users u
LEFT JOIN orders o
ON u.user_id = o.user_id
GROUP BY u.user_id, u.name, u.email;

--TO SEE VIEW
SELECT * FROM user_order_summary;