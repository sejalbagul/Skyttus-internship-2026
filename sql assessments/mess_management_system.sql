

-- Enable UUID extension (optional but useful)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Create Users Table
CREATE TABLE IF NOT EXISTS Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    role VARCHAR(20) CHECK (role IN ('admin', 'member', 'staff')) DEFAULT 'member',
    join_date DATE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Create MessPlans Table
CREATE TABLE IF NOT EXISTS MessPlans (
    plan_id SERIAL PRIMARY KEY,
    plan_name VARCHAR(50) NOT NULL,
    description TEXT,
    monthly_fee DECIMAL(10,2) NOT NULL,
    meals_per_day INT DEFAULT 3,
    is_active BOOLEAN DEFAULT TRUE
);

-- 3. Create UserSubscriptions Table
CREATE TABLE IF NOT EXISTS UserSubscriptions (
    subscription_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id) ON DELETE CASCADE,
    plan_id INT REFERENCES MessPlans(plan_id) ON DELETE CASCADE,
    start_date DATE NOT NULL,
    end_date DATE,
    status VARCHAR(20) CHECK (status IN ('active', 'expired', 'cancelled')) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Create Meals Table
CREATE TABLE IF NOT EXISTS Meals (
    meal_id SERIAL PRIMARY KEY,
    meal_name VARCHAR(100) NOT NULL,
    meal_type VARCHAR(20) CHECK (meal_type IN ('breakfast', 'lunch', 'dinner', 'snacks')) NOT NULL,
    description TEXT,
    is_vegetarian BOOLEAN DEFAULT TRUE,
    calories INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Create Menu Table
CREATE TABLE IF NOT EXISTS Menu (
    menu_id SERIAL PRIMARY KEY,
    meal_id INT REFERENCES Meals(meal_id) ON DELETE CASCADE,
    menu_date DATE NOT NULL,
    available_quantity INT DEFAULT 50,
    price_per_meal DECIMAL(10,2),
    special_note TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(menu_date, meal_id)
);

-- 6. Create MealBookings Table
CREATE TABLE IF NOT EXISTS MealBookings (
    booking_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id) ON DELETE CASCADE,
    menu_id INT REFERENCES Menu(menu_id) ON DELETE CASCADE,
    booking_date DATE NOT NULL,
    quantity INT DEFAULT 1,
    total_amount DECIMAL(10,2),
    status VARCHAR(20) CHECK (status IN ('confirmed', 'cancelled', 'completed')) DEFAULT 'confirmed',
    booking_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Create Payments Table
CREATE TABLE IF NOT EXISTS Payments (
    payment_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id) ON DELETE CASCADE,
    subscription_id INT REFERENCES UserSubscriptions(subscription_id) ON DELETE CASCADE,
    amount DECIMAL(10,2) NOT NULL,
    payment_date DATE NOT NULL,
    payment_method VARCHAR(20) CHECK (payment_method IN ('cash', 'card', 'online')) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('pending', 'completed', 'failed')) DEFAULT 'pending',
    transaction_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 8. Create Attendance Table
CREATE TABLE IF NOT EXISTS Attendance (
    attendance_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id) ON DELETE CASCADE,
    menu_id INT REFERENCES Menu(menu_id) ON DELETE CASCADE,
    attendance_date DATE NOT NULL,
    meal_taken BOOLEAN DEFAULT FALSE,
    check_in_time TIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, menu_id, attendance_date)
);

-- Insert Sample Data

-- Users
INSERT INTO Users (username, password_hash, full_name, email, phone, role, join_date) VALUES
('rajesh_k', 'hash123', 'Rajesh Kumar', 'rajesh.k@email.com', '9876543210', 'member', '2024-01-01'),
('priya_s', 'hash456', 'Priya Sharma', 'priya.s@email.com', '9988776655', 'member', '2024-01-15'),
('amit_p', 'hash789', 'Amit Patel', 'amit.p@email.com', '9876512345', 'admin', '2024-01-01'),
('deepika_r', 'hash321', 'Deepika Reddy', 'deepika.r@email.com', '9876509876', 'member', '2024-02-01'),
('suresh_m', 'hash654', 'Suresh Menon', 'suresh.m@email.com', '9876501234', 'staff', '2024-01-10'),
('anjali_d', 'hash147', 'Anjali Desai', 'anjali.d@email.com', '9876543222', 'member', '2024-02-15'),
('vikram_s', 'hash258', 'Vikram Singh', 'vikram.s@email.com', '9876543333', 'member', '2024-03-01'),
('kavita_j', 'hash369', 'Kavita Joshi', 'kavita.j@email.com', '9876543444', 'member', '2024-03-10'),
('arjun_n', 'hash159', 'Arjun Nair', 'arjun.n@email.com', '9876543555', 'member', '2024-03-15'),
('neha_g', 'hash267', 'Neha Gupta', 'neha.g@email.com', '9876543666', 'staff', '2024-02-20');

-- Mess Plans 
INSERT INTO MessPlans (plan_name, description, monthly_fee, meals_per_day) VALUES
('Basic Plan', 'Only Breakfast - South Indian/North Indian options', 1500.00, 1),
('Standard Plan', 'Breakfast + Lunch - Full meals', 2800.00, 2),
('Premium Plan', 'All meals including dinner - Unlimited', 4200.00, 3),
('Student Plan', 'Special discount for students', 2000.00, 2),
('Weekend Special', 'Only Saturday & Sunday meals', 1200.00, 2);

-- User Subscriptions
INSERT INTO UserSubscriptions (user_id, plan_id, start_date, end_date, status) VALUES
(1, 3, '2024-01-01', '2024-12-31', 'active'),
(2, 2, '2024-01-15', '2024-12-31', 'active'),
(3, 3, '2024-01-01', '2024-12-31', 'active'),
(4, 1, '2024-02-01', '2024-12-31', 'active'),
(5, 2, '2024-01-10', '2024-12-31', 'active'),
(6, 4, '2024-02-15', '2024-08-15', 'active'),
(7, 3, '2024-03-01', '2024-12-31', 'active'),
(8, 2, '2024-03-10', '2024-09-10', 'active'),
(9, 4, '2024-03-15', '2024-07-15', 'active'),
(10, 5, '2024-02-20', '2024-12-31', 'active');

-- Meals 
INSERT INTO Meals (meal_name, meal_type, description, is_vegetarian, calories) VALUES
('Masala Dosa', 'breakfast', 'Crispy dosa with potato filling, served with sambar and chutney', TRUE, 350),
('Idli-Sambar', 'breakfast', 'Soft idlis with sambar and coconut chutney', TRUE, 250),
('Poha', 'breakfast', 'Flattened rice with peanuts, curry leaves and lemon', TRUE, 200),
('Aloo Paratha', 'breakfast', 'Wheat flatbread stuffed with spiced potatoes, served with curd', TRUE, 400),
('Vegetable Biryani', 'lunch', 'Fragrant rice cooked with mixed vegetables and aromatic spices', TRUE, 550),
('Chicken Biryani', 'lunch', 'Hyderabadi style biryani with tender chicken pieces', FALSE, 650),
('Dal Makhani', 'lunch', 'Creamy black lentils cooked overnight', TRUE, 350),
('Butter Chicken', 'dinner', 'Tender chicken in rich creamy tomato gravy', FALSE, 600),
('Paneer Butter Masala', 'dinner', 'Cottage cheese cubes in rich creamy gravy', TRUE, 450),
('Roti Sabzi', 'dinner', 'Whole wheat rotis with mixed vegetable curry', TRUE, 400),
('Fish Curry', 'dinner', 'Bengali style fish curry with mustard seeds', FALSE, 500),
('Chole Bhature', 'lunch', 'Spicy chickpea curry with fried bread', TRUE, 600),
('Samosa', 'snacks', 'Fried pastry with spiced potato filling', TRUE, 250),
('Vada Pav', 'snacks', 'Mumbai style burger with potato fritter', TRUE, 300),
('Jalebi', 'snacks', 'Crispy spiral sweets soaked in sugar syrup', TRUE, 200);

-- Menu 
INSERT INTO Menu (meal_id, menu_date, available_quantity, price_per_meal) VALUES
(1, CURRENT_DATE + INTERVAL '1 day', 60, 60.00),
(2, CURRENT_DATE + INTERVAL '1 day', 70, 50.00),
(5, CURRENT_DATE + INTERVAL '1 day', 50, 120.00),
(6, CURRENT_DATE + INTERVAL '1 day', 40, 150.00),
(3, CURRENT_DATE + INTERVAL '2 days', 65, 40.00),
(4, CURRENT_DATE + INTERVAL '2 days', 55, 70.00),
(7, CURRENT_DATE + INTERVAL '2 days', 45, 100.00),
(8, CURRENT_DATE + INTERVAL '2 days', 35, 180.00),
(9, CURRENT_DATE + INTERVAL '3 days', 50, 140.00),
(10, CURRENT_DATE + INTERVAL '3 days', 60, 80.00),
(11, CURRENT_DATE + INTERVAL '3 days', 30, 160.00),
(12, CURRENT_DATE + INTERVAL '4 days', 40, 90.00),
(13, CURRENT_DATE + INTERVAL '4 days', 80, 30.00),
(14, CURRENT_DATE + INTERVAL '4 days', 75, 35.00),
(15, CURRENT_DATE + INTERVAL '5 days', 50, 40.00);

-- Fixed Meal Bookings 
INSERT INTO MealBookings (user_id, menu_id, booking_date, quantity, total_amount, status) VALUES
(1, 1, CURRENT_DATE + INTERVAL '1 day', 2, 120.00, 'confirmed'),
(2, 2, CURRENT_DATE + INTERVAL '1 day', 1, 50.00, 'confirmed'),
(3, 3, CURRENT_DATE + INTERVAL '1 day', 1, 120.00, 'confirmed'),
(4, 4, CURRENT_DATE + INTERVAL '1 day', 1, 150.00, 'confirmed'),
(5, 5, CURRENT_DATE + INTERVAL '2 days', 2, 80.00, 'confirmed'),
(6, 6, CURRENT_DATE + INTERVAL '2 days', 1, 70.00, 'completed'),
(7, 7, CURRENT_DATE + INTERVAL '2 days', 1, 100.00, 'confirmed'),
(8, 8, CURRENT_DATE + INTERVAL '2 days', 1, 180.00, 'confirmed'),
(9, 9, CURRENT_DATE + INTERVAL '3 days', 2, 280.00, 'confirmed'),
(10, 10, CURRENT_DATE + INTERVAL '3 days', 1, 80.00, 'confirmed'),  
(1, 11, CURRENT_DATE + INTERVAL '3 days', 1, 160.00, 'confirmed'),
(2, 12, CURRENT_DATE + INTERVAL '4 days', 2, 180.00, 'confirmed'),
(3, 13, CURRENT_DATE + INTERVAL '4 days', 3, 90.00, 'confirmed'),
(4, 14, CURRENT_DATE + INTERVAL '4 days', 2, 70.00, 'confirmed'),
(5, 15, CURRENT_DATE + INTERVAL '5 days', 1, 40.00, 'completed');

-- Payments 
INSERT INTO Payments (user_id, subscription_id, amount, payment_date, payment_method, status, transaction_id) VALUES
(1, 1, 4200.00, DATE_TRUNC('month', CURRENT_DATE), 'online', 'completed', 'UPI123456'),
(2, 2, 2800.00, DATE_TRUNC('month', CURRENT_DATE), 'card', 'completed', 'CARD789012'),
(3, 3, 4200.00, DATE_TRUNC('month', CURRENT_DATE), 'online', 'completed', 'UPI345678'),
(4, 4, 1500.00, DATE_TRUNC('month', CURRENT_DATE), 'cash', 'completed', 'CASH001'),
(5, 5, 2800.00, DATE_TRUNC('month', CURRENT_DATE), 'online', 'pending', 'UPI901234'),
(6, 6, 2000.00, DATE_TRUNC('month', CURRENT_DATE), 'card', 'completed', 'CARD567890'),
(7, 7, 4200.00, '2024-03-01', 'online', 'completed', 'UPI112233'),
(8, 8, 2800.00, '2024-03-10', 'cash', 'completed', 'CASH002'),
(9, 9, 2000.00, '2024-03-15', 'online', 'completed', 'UPI445566'),
(10, 10, 1200.00, DATE_TRUNC('month', CURRENT_DATE), 'card', 'completed', 'CARD778899');

-- Attendance
INSERT INTO Attendance (user_id, menu_id, attendance_date, meal_taken, check_in_time) VALUES
(1, 1, CURRENT_DATE + INTERVAL '1 day', TRUE, '08:30:00'),
(2, 2, CURRENT_DATE + INTERVAL '1 day', TRUE, '08:45:00'),
(3, 3, CURRENT_DATE + INTERVAL '1 day', TRUE, '13:15:00'),
(4, 4, CURRENT_DATE + INTERVAL '1 day', TRUE, '13:30:00'),
(5, 5, CURRENT_DATE + INTERVAL '2 days', TRUE, '08:15:00'),
(6, 6, CURRENT_DATE + INTERVAL '2 days', TRUE, '09:00:00'),
(7, 7, CURRENT_DATE + INTERVAL '2 days', TRUE, '20:00:00'),
(8, 8, CURRENT_DATE + INTERVAL '2 days', TRUE, '19:45:00'),
(9, 9, CURRENT_DATE + INTERVAL '3 days', TRUE, '13:00:00'),
(10, 10, CURRENT_DATE + INTERVAL '3 days', FALSE, NULL),
(1, 11, CURRENT_DATE + INTERVAL '3 days', TRUE, '20:30:00'),
(2, 12, CURRENT_DATE + INTERVAL '4 days', TRUE, '13:45:00'),
(3, 13, CURRENT_DATE + INTERVAL '4 days', TRUE, '17:30:00'),
(4, 14, CURRENT_DATE + INTERVAL '4 days', TRUE, '17:15:00'),
(5, 15, CURRENT_DATE + INTERVAL '5 days', TRUE, '12:30:00');

-- 15 Business Queries 

-- Query 1: Get all active members 
SELECT full_name, email, phone, join_date 
FROM Users 
WHERE role = 'member' AND is_active = TRUE;

-- Query 2: Get today's menu 
SELECT m.meal_name, m.meal_type, mn.price_per_meal, mn.available_quantity 
FROM Menu mn
JOIN Meals m ON mn.meal_id = m.meal_id
WHERE mn.menu_date = CURRENT_DATE;

-- Query 3: Get total revenue from payments this month 
SELECT SUM(amount) as total_revenue_inr, COUNT(*) as total_transactions
FROM Payments
WHERE EXTRACT(MONTH FROM payment_date) = EXTRACT(MONTH FROM CURRENT_DATE)
AND EXTRACT(YEAR FROM payment_date) = EXTRACT(YEAR FROM CURRENT_DATE)
AND status = 'completed';

-- Query 4: Get user with most meal bookings 
SELECT u.full_name, COUNT(mb.booking_id) as total_bookings
FROM Users u
JOIN MealBookings mb ON u.user_id = mb.user_id
GROUP BY u.user_id, u.full_name
ORDER BY total_bookings DESC
LIMIT 1;

-- Query 5: Get meal popularity report 
SELECT m.meal_name, COUNT(mb.booking_id) as times_ordered
FROM Meals m
JOIN Menu mn ON m.meal_id = mn.meal_id
JOIN MealBookings mb ON mn.menu_id = mb.menu_id
GROUP BY m.meal_id, m.meal_name
ORDER BY times_ordered DESC;

-- Query 6: Get pending payments
SELECT u.full_name, p.amount, p.payment_date, p.payment_method
FROM Payments p
JOIN Users u ON p.user_id = u.user_id
WHERE p.status = 'pending';

-- Query 7: Get today's attendance count
SELECT COUNT(*) as meals_served_today
FROM Attendance
WHERE attendance_date = CURRENT_DATE AND meal_taken = TRUE;

-- Query 8: Get vegetarian vs non-vegetarian meal distribution 
SELECT 
    SUM(CASE WHEN m.is_vegetarian = TRUE THEN 1 ELSE 0 END) as veg_meals,
    SUM(CASE WHEN m.is_vegetarian = FALSE THEN 1 ELSE 0 END) as non_veg_meals
FROM Meals m;

-- Query 9: Get users whose subscription is expiring next month
SELECT u.full_name, u.email, us.end_date
FROM Users u
JOIN UserSubscriptions us ON u.user_id = us.user_id
WHERE us.end_date BETWEEN 
    DATE_TRUNC('month', CURRENT_DATE + INTERVAL '1 month') 
    AND (DATE_TRUNC('month', CURRENT_DATE + INTERVAL '2 month') - INTERVAL '1 day');

-- Query 10: Get revenue by payment method (UPI vs Card vs Cash)
SELECT 
    CASE 
        WHEN payment_method = 'online' THEN 'UPI/Online'
        WHEN payment_method = 'card' THEN 'Credit/Debit Card'
        ELSE 'Cash'
    END as payment_mode,
    SUM(amount) as total_amount_inr,
    COUNT(*) as transaction_count
FROM Payments
WHERE status = 'completed'
GROUP BY payment_method;

-- Query 11: Get average daily bookings for each meal type
SELECT m.meal_type, AVG(daily_bookings) as avg_daily_bookings
FROM (
    SELECT mn.meal_id, mn.menu_date, COUNT(mb.booking_id) as daily_bookings
    FROM Menu mn
    LEFT JOIN MealBookings mb ON mn.menu_id = mb.menu_id
    GROUP BY mn.meal_id, mn.menu_date
) daily
JOIN Meals m ON daily.meal_id = m.meal_id
GROUP BY m.meal_type;

-- Query 12: Get top 5 users by total spending
SELECT u.full_name, SUM(p.amount) as total_spent_inr
FROM Users u
JOIN Payments p ON u.user_id = p.user_id
WHERE p.status = 'completed'
GROUP BY u.user_id, u.full_name
ORDER BY total_spent_inr DESC
LIMIT 5;

-- Query 13: Get meal booking efficiency (booked vs available)
SELECT 
    m.meal_name,
    mn.menu_date,
    mn.available_quantity as total_available,
    COUNT(mb.booking_id) as booked,
    ROUND(COUNT(mb.booking_id)::DECIMAL / mn.available_quantity * 100, 2) as booking_percentage
FROM Menu mn
JOIN Meals m ON mn.meal_id = m.meal_id
LEFT JOIN MealBookings mb ON mn.menu_id = mb.menu_id
GROUP BY mn.menu_id, m.meal_name, mn.menu_date, mn.available_quantity;

-- Query 14: Get users who haven't booked any meal this week
SELECT u.full_name, u.email, u.phone
FROM Users u
WHERE u.user_id NOT IN (
    SELECT DISTINCT user_id 
    FROM MealBookings 
    WHERE booking_date >= CURRENT_DATE - INTERVAL '7 days'
) AND u.role = 'member';

-- Query 15: Get monthly revenue trend 
SELECT 
    TO_CHAR(payment_date, 'YYYY-MM') as month,
    SUM(amount) as monthly_revenue_inr,
    COUNT(*) as transaction_count,
    AVG(amount) as avg_transaction_value_inr
FROM Payments
WHERE status = 'completed'
GROUP BY TO_CHAR(payment_date, 'YYYY-MM')
ORDER BY month DESC;

-- Optimized Queries

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_booking_date ON MealBookings(booking_date);
CREATE INDEX IF NOT EXISTS idx_payment_date ON Payments(payment_date);
CREATE INDEX IF NOT EXISTS idx_attendance_date ON Attendance(attendance_date);
CREATE INDEX IF NOT EXISTS idx_menu_date ON Menu(menu_date);
CREATE INDEX IF NOT EXISTS idx_user_role ON Users(role) WHERE role = 'member';

-- Optimized Query
EXPLAIN ANALYZE
SELECT 
    m.meal_name,
    COUNT(mb.booking_id) as times_ordered,
    AVG(mn.price_per_meal) as avg_price_inr
FROM Meals m
INNER JOIN Menu mn ON m.meal_id = mn.meal_id
INNER JOIN MealBookings mb ON mn.menu_id = mb.menu_id
WHERE mb.booking_date >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY m.meal_id, m.meal_name
ORDER BY times_ordered DESC
LIMIT 10;

-- Optimized Query 2: Get user spending summary (using CTE for better readability and performance
EXPLAIN ANALYZE
WITH monthly_spending AS (
    SELECT user_id, SUM(amount) as total
    FROM Payments
    WHERE status = 'completed'
    AND EXTRACT(MONTH FROM payment_date) = EXTRACT(MONTH FROM CURRENT_DATE)
    AND EXTRACT(YEAR FROM payment_date) = EXTRACT(YEAR FROM CURRENT_DATE)
    GROUP BY user_id
),
annual_spending AS (
    SELECT user_id, SUM(amount) as total
    FROM Payments
    WHERE status = 'completed'
    GROUP BY user_id
)
SELECT 
    u.user_id,
    u.full_name,
    COALESCE(ms.total, 0) as current_month_spending_inr,
    COALESCE(an.total, 0) as total_spending_inr
FROM Users u
LEFT JOIN monthly_spending ms ON u.user_id = ms.user_id
LEFT JOIN annual_spending an ON u.user_id = an.user_id
WHERE u.role = 'member'
ORDER BY total_spending_inr DESC;

-- Optimized Query 3: Get daily meal summary with materialized view for frequently accessed data
-- First, create a materialized view for better performance
CREATE MATERIALIZED VIEW IF NOT EXISTS daily_meal_summary AS
SELECT 
    mn.menu_date,
    m.meal_type,
    COUNT(DISTINCT mb.user_id) as unique_users,
    COALESCE(SUM(mb.quantity), 0) as total_meals_served,
    COUNT(DISTINCT a.attendance_id) > 0 as has_attendance_record
FROM Menu mn
INNER JOIN Meals m ON mn.meal_id = m.meal_id
LEFT JOIN MealBookings mb ON mn.menu_id = mb.menu_id 
    AND mb.booking_date = mn.menu_date
    AND mb.status IN ('confirmed', 'completed')
LEFT JOIN Attendance a ON a.menu_id = mn.menu_id 
    AND a.attendance_date = mn.menu_date
WHERE mn.menu_date >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY mn.menu_date, m.meal_type;

-- Create unique index on materialized view
CREATE UNIQUE INDEX IF NOT EXISTS idx_daily_summary ON daily_meal_summary(menu_date, meal_type);

-- Refresh materialized view (can be scheduled as a cron job)
REFRESH MATERIALIZED VIEW CONCURRENTLY daily_meal_summary;

-- Query using materialized view (much faster for repeated queries)
EXPLAIN ANALYZE
SELECT * FROM daily_meal_summary
WHERE menu_date >= CURRENT_DATE - INTERVAL '7 days'
ORDER BY menu_date DESC, meal_type;

-- Additional useful functions and triggers

-- Function to update total_amount in MealBookings automatically
CREATE OR REPLACE FUNCTION update_booking_total()
RETURNS TRIGGER AS $$
BEGIN
    NEW.total_amount = (
        SELECT price_per_meal * NEW.quantity
        FROM Menu
        WHERE menu_id = NEW.menu_id
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically calculate total_amount
CREATE TRIGGER trigger_update_booking_total
    BEFORE INSERT ON MealBookings
    FOR EACH ROW
    EXECUTE FUNCTION update_booking_total();

-- Function to check subscription status
CREATE OR REPLACE FUNCTION check_subscription_status()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.end_date < CURRENT_DATE THEN
        NEW.status = 'expired';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for subscription status
CREATE TRIGGER trigger_check_subscription
    BEFORE INSERT OR UPDATE ON UserSubscriptions
    FOR EACH ROW
    EXECUTE FUNCTION check_subscription_status();

-- View for active members with their current plan 
CREATE OR REPLACE VIEW active_members_with_plan AS
SELECT 
    u.user_id,
    u.full_name,
    u.email,
    u.phone,
    mp.plan_name,
    mp.monthly_fee as plan_fee_inr,
    us.start_date,
    us.end_date,
    us.status as subscription_status
FROM Users u
JOIN UserSubscriptions us ON u.user_id = us.user_id
JOIN MessPlans mp ON us.plan_id = mp.plan_id
WHERE u.role = 'member' 
AND u.is_active = TRUE 
AND us.status = 'active';

-- View for daily revenue 
CREATE OR REPLACE VIEW daily_revenue AS
SELECT 
    payment_date,
    SUM(amount) as total_revenue_inr,
    COUNT(*) as transaction_count,
    COUNT(DISTINCT user_id) as unique_users
FROM Payments
WHERE status = 'completed'
GROUP BY payment_date
ORDER BY payment_date DESC;

-- View for popular  dishes
CREATE OR REPLACE VIEW popular_indian_dishes AS
SELECT 
    m.meal_name,
    m.meal_type,
    m.is_vegetarian,
    COUNT(mb.booking_id) as total_orders,
    AVG(mn.price_per_meal) as avg_price_inr
FROM Meals m
JOIN Menu mn ON m.meal_id = mn.meal_id
JOIN MealBookings mb ON mn.menu_id = mb.menu_id
WHERE mb.booking_date >= CURRENT_DATE - INTERVAL '60 days'
GROUP BY m.meal_id, m.meal_name, m.meal_type, m.is_vegetarian
ORDER BY total_orders DESC;

-- Statistics gathering
ANALYZE Users;
ANALYZE MealBookings;
ANALYZE Payments;
ANALYZE Menu;
ANALYZE Meals;