CREATE DATABASE  login;
USE login


CREATE TABLE IF NOT EXISTS akun (
id INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(36),
`password` VARCHAR(36)
);
