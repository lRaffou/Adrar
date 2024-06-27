CREATE DATABASE ticket;

USE ticket;

CREATE TABLE vendeurs(
	idvendeurs INT PRIMARY KEY AUTO_INCREMENT,
    name_vendeurs VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    age INT NOT NULL
);

CREATE TABLE clients(
	idclients INT PRIMARY KEY AUTO_INCREMENT,
    last_name VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL
);

CREATE TABLE tickets(
	idtickets INT PRIMARY KEY AUTO_INCREMENT,
    date_ticket DATE NOT NULL
    -- idticket INT,
    -- FOREIGN KEY (idtickets) REFERENCES vendeurs(idvendeurs)
);

CREATE TABLE articles(
	idarticles INT PRIMARY KEY AUTO_INCREMENT,
    name_articles VARCHAR(50) NOT NULL,
    price DECIMAL(14,6) NOT NULL
);

CREATE TABLE contenir(
	idtickets INT,
    idarticles INT,
	FOREIGN KEY (idtickets) REFERENCES tickets(idtickets),
	FOREIGN KEY (idarticles) REFERENCES articles(idarticles)
);

-- ALTER TABLE tickets DROP CONSTRAINT tickets_ibfk_1;
-- ALTER TABLE tickets ADD COLUMN idvendeur INT;
-- ALTER TABLE tickets ADD CONSTRAINT `modif_key_étrangère` FOREIGN KEY (idvendeur) REFERENCES vendeurs(idvendeurs);
-- ALTER TABLE tickets ADD COLUMN idclients INT;
-- ALTER TABLE tickets ADD CONSTRAINT `key_étrangère_clients_tickets` FOREIGN KEY (idclients) REFERENCES clients(idclients);
-- ALTER TABLE contenir ADD COLUMN quantite INT;
-- ALTER TABLE contenir ADD PRIMARY KEY (idtickets, idarticles);
-- ALTER TABLE clients ADD COLUMN mail VARCHAR(50);
-- ALTER TABLE clients ADD COLUMN numero_client INT;
-- ALTER TABLE clients MODIFY mail VARCHAR(150) UNIQUE NOT NULL;
-- ALTER TABLE clients MODIFY numero_client INT UNIQUE NOT NULL;
-- ALTER TABLE clients ADD psswrd VARCHAR(150) NOT NULL;

INSERT INTO articles VALUES(1,"Sabre de Zoro",150);
INSERT INTO articles VALUES(2,"Haut de forme de Sabo",200);
INSERT INTO articles VALUES(3,"Chapeau de paille de Luffy",1500);
INSERT INTO articles VALUES(4,"Carte de Nami",500);
INSERT INTO articles VALUES(5,"Batterie de cuisine de Sanji",1050);

INSERT INTO vendeurs (name_vendeurs,first_name,age)
	VALUES	("Leclown","Baggy",36),
			("Gol.D","Rogger",58),
            ("Leroux","Shanks",37);
            
INSERT INTO clients (last_name,first_name,mail,numero_client,psswrd)
	VALUES	("Monkey.D", "Luffy", "luffy@mugiwara.op", 11, "roidespirates"),
			("Roronoa", "Zoro", "zoro@mugiwara.op", 22, "epeiste"),
            ("Voleuse", "Nami", "nami@mugiwara.op", 33, "lorlor");
            
INSERT INTO tickets (date_ticket, idvendeur, idclients)
	VALUES	("2024-06-26", 2, 1),
			("2024-05-26", 1, 2),
            ("2024-04-26", 3, 3);
            
INSERT INTO contenir (idtickets, idarticles, quantite)
	VALUES	(1, 3, 1),
			(2, 1, 3);

ALTER TABLE articles MODIFY price DECIMAL(8,2);

UPDATE articles SET price = 650000 WHERE idarticles = 1 ;
UPDATE articles SET price = 2000 WHERE idarticles = 2 ;
UPDATE articles SET price = 100000 WHERE idarticles = 3 ;
UPDATE articles SET price = 80000 WHERE idarticles = 4 ;
UPDATE articles SET price = 250000 WHERE idarticles = 5 ;

UPDATE clients SET last_name = "Kaizoku" WHERE idclients = 1 ;
UPDATE clients SET first_name = "Luffytaro" WHERE idclients = 1 ;

UPDATE vendeurs SET age = 40 WHERE first_name LIKE "%ha%" OR  name_vendeurs LIKE "%ha%";

UPDATE tickets SET date_ticket = "2024-06-27" WHERE idtickets BETWEEN 1 AND 10;

SELECT count(idvendeurs) FROM vendeurs;

SELECT count(idtickets) FROM tickets;

SELECT idvendeur, count(idtickets) FROM tickets GROUP BY idvendeur;

SELECT avg(quantite) FROM contenir;

SELECT idtickets, avg(quantite) FROM contenir GROUP BY idtickets;

SELECT max(price) FROM articles;

SELECT min(price) FROM articles;

SELECT avg(price) FROM articles;

SELECT max(idclients) AS le_nom, tickets.last_name FROM clients;

SELECT DISTINCT first_name, idclients FROM clients LIMIT 1;

SELECT first_name, idclients FROM clients ORDER BY idclients DESC LIMIT 1;