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
ALTER TABLE clients ADD psswrd VARCHAR(150) NOT NULL;