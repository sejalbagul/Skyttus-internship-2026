--USE CUTOMERS AND CUSTOMER_ORDERS TABLE

--ADD INDEX TO IMPROVE SEARCH 
CREATE INDEX idx_customer_orders_customer_id ON customer_orders(customer_id);

-- USE EXPLAIN TO ANALYZE QUERY
 EXPLAIN SELECT * FROM customer_orders WHERE customer_id = 1;

--OPTIMIZE A SLOW JOIN QUERY
--step 1 index on join column
CREATE INDEX idx_customer_orders_amount ON customer_orders(amount);

--step 2 check with explain
EXPLAIN SELECT c.name,co.amount FROM customers c JOIN customer_orders co ON c.customer_id = co.customer_id WHERE co.amount > 20000;

-- EXPLAIN WHY INDEX SHOULD NOT BE USED
-- Index should not be used on small tables
-- or columns with low cardinality
Indexes should not be used when:
1. Table is very small
2. Column has very few unique values
3. Data is frequently updated (INSERT/UPDATE/DELETE)
4. Query returns most of the rows
5. Index maintenance cost is higher than benefit