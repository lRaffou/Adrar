CREATE DATABASE task;
USE task;

CREATE TABLE users (
	id_users INT PRIMARY KEY AUTO_INCREMENT,
    name_user VARCHAR(50) NOT NULL,
    first_name_user VARCHAR(50) NOT NULL,
    login_user VARCHAR(150) NOT NULL UNIQUE,
    mdp_user VARCHAR(50) NOT NULL
);
CREATE TABLE task (
	id_task INT PRIMARY KEY AUTO_INCREMENT,
    nom_task VARCHAR(50) NOT NULL,
    content_task TEXT NOT NULL,
    date_task DATE,
	id_users INT,
	id_cat INT,
    FOREIGN KEY (id_users) REFERENCES users(id_users),
    FOREIGN KEY (id_cat) REFERENCES category(id_cat)
);
CREATE TABLE category (
	id_cat INT PRIMARY KEY AUTO_INCREMENT,
    name_cat VARCHAR(50) NOT NULL UNIQUE
);