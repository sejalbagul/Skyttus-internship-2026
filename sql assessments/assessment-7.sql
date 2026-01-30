--CREATE TABLES

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(30)
);

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    price INT
);


CREATE TABLE customer_orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    amount INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES customer_orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

--INSERT VALUES
INSERT INTO customers VALUES
(1, 'Amit', 'Surat'),
(2, 'Neha', 'Ahmedabad'),
(3, 'Ravi', 'Vadodara'),
(4, 'Pooja', 'Surat');

INSERT INTO products VALUES
(101, 'Mobile', 15000),
(102, 'Laptop', 50000),
(103, 'Headphones', 2000);


INSERT INTO customer_orders VALUES
(201, 1, '2025-01-10', 15000),
(202, 1, '2025-02-15', 50000),
(203, 2, '2025-02-20', 2000),
(204, 3, '2025-03-05', 52000);

INSERT INTO order_items VALUES
(201, 101, 1),
(202, 102, 1),
(203, 103, 1),
(204, 102, 1),
(204, 103, 1);

--TOTAL ORDERS PER CUSTOMER
SELECT c.customer_id, c.name, COUNT(co.order_id) AS total_orders
FROM customers c
LEFT JOIN customer_orders co
ON c.customer_id = co.customer_id
GROUP BY c.customer_id, c.name;

--CUSTOMERS WHO NEVER PLACED AN ORDER
SELECT c.customer_id, c.name
FROM customers c
LEFT JOIN customer_orders co
ON c.customer_id = co.customer_id
WHERE co.order_id IS NULL;

--HIGHEST SELLING PRODUCT
SELECT p.product_name, SUM(oi.quantity) AS total_sold
FROM products p
JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_name
ORDER BY total_sold DESC
LIMIT 1;

--MONTHLY SALES REPORT
SELECT 
    TO_CHAR(order_date, 'YYYY-MM') AS month,
    SUM(amount) AS total_sales
FROM customer_orders
GROUP BY month
ORDER BY month;

--CUSTOMERS WITH TOTAL PURCHASE
SELECT c.customer_id, c.name, SUM(co.amount) AS total_purchase
FROM customers c
JOIN customer_orders co
ON c.customer_id = co.customer_id
GROUP BY c.customer_id, c.name
HAVING SUM(co.amount) > 50000;

--TOP 3 CITIES BY REVENUE
SELECT c.city, SUM(co.amount) AS total_revenue
FROM customers c
JOIN customer_orders co
ON c.customer_id = co.customer_id
GROUP BY c.city
ORDER BY total_revenue DESC
LIMIT 3;
