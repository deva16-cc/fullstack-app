CREATE DATABASE companydb;

USE companydb;

CREATE TABLE employees(

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),

email VARCHAR(100)

);

INSERT INTO employees(name,email)

VALUES

('John','john@gmail.com'),

('David','david@gmail.com'),

('Alice','alice@gmail.com'),

('Deva','dev@gmail.com'),

('Robert','robert@gmail.com');
