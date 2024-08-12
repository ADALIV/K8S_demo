CREATE DATABASE IF NOT EXISTS myappdb;
USE myappdb;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    score INT NOT NULL
);

INSERT INTO users (username, password, score) VALUES ('user1', 'password1', 100);
INSERT INTO users (username, password, score) VALUES ('user2', 'password2', 150);
