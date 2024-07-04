-- CREATE DATABASE jeucombat;
USE jeucombat;

CREATE TABLE type_personnage (
	id_type_personnage INT PRIMARY KEY AUTO_INCREMENT,
    type_perso VARCHAR(50) NOT NULL,
    point_de_vie INT NOT NULL,
    defense INT NOT NULL,
    attaque INT NOT NULL
);
INSERT INTO type_personnage (type_perso, point_de_vie, defense, attaque)
	VALUES ("Barbare", 125, 5, 15);
INSERT INTO type_personnage (type_perso, point_de_vie, defense, attaque)
	VALUES ("Guerrier", 100, 10, 10);
INSERT INTO type_personnage (type_perso, point_de_vie, defense, attaque)
	VALUES ("Chevalier", 75, 15, 5);

CREATE TABLE arene(
	id_arene INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL
);
INSERT INTO arene (nom)
	VALUES ("Colisée"), ("Muraille"), ("Armurerie");

CREATE TABLE item (
	id_item INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    bonus_de_point_de_vie INT NOT NULL,
    bonus_de_defense INT NOT NULL,
    bonus_attaque INT NOT NULL
);
INSERT INTO item (nom, bonus_de_point_de_vie, bonus_de_defense, bonus_attaque)
	VALUES ("Arme de base", 0, 0, 0),
	("Bouclier de la Méduse", 25, 15, 10),
    ("Marteau de Thor", 25, 5, 20),
    ("Excalibur", 20, 10, 20),
    ("Egide", 20, 30, 0),
    ("Sainte Lance", 10, 10, 30);

CREATE TABLE costume (
	id_costume INT PRIMARY KEY AUTO_INCREMENT,
    nom_costume VARCHAR(50) NOT NULL
);
INSERT INTO costume (nom_costume)
	VALUES ("La Faucheuse"),
	("Le Lapin de Pâque"),
	("La Banshee"),
	("Jeanne d'Arc"),
	("Phénix");

CREATE TABLE carnet_ami (
	id_carnet_ami INT PRIMARY KEY AUTO_INCREMENT,
    nom_carnet_ami VARCHAR(50) NOT NULL
);
INSERT INTO carnet_ami (nom_carnet_ami)
	VALUES ("Ma Liste"),
    ("Mes Amis"),
    ("Super Friends"),
    ("The Crew"),
    ("Famille de Coeur");

CREATE TABLE obtenir (
	id_obtenir INT PRIMARY KEY AUTO_INCREMENT,
    id_item INT,
	id_personnage INT,
    equipe BOOLEAN NOT NULL,
    FOREIGN KEY (id_item) REFERENCES item(id_item),
    FOREIGN KEY (id_personnage) REFERENCES personnage(id_personnage)
);
INSERT INTO obtenir (id_item, id_personnage, equipe)
	VALUES (6,1,false),
    (6,2,false),
    (6,3,false),
    (6,4,false),
    (6,5,false),
    (6,6,true),
    (6,7,true),
    (1,1,true),
    (2,1,false),
    (3,2,true),
    (4,3,true),
    (5,4,true),
    (1,5,true),
    (3,3,false),
    (4,1,false);
    
CREATE TABLE contenir (
	id_contenir INT PRIMARY KEY AUTO_INCREMENT,
    id_carnet_ami INT,
	id_joueur INT,
    FOREIGN KEY (id_carnet_ami) REFERENCES carnet_ami(id_carnet_ami),
    FOREIGN KEY (id_joueur) REFERENCES joueur(id_joueur)
);
INSERT INTO contenir (id_carnet_ami, id_joueur)
	VALUES (3,1),
    (1,3),
    (3,2),
    (2,3),
    (1,4),
    (4,1),
    (4,5),
    (5,4),
    (5,2),
    (2,5),
    (5,3),
    (3,5);

CREATE TABLE joueur (
	id_joueur INT PRIMARY KEY AUTO_INCREMENT,
    pseudo_joueur VARCHAR(50) NOT NULL,
    mot_de_passe_joueur VARCHAR(150) NOT NULL,
    mail_joueur VARCHAR(100) NOT NULL,
	id_carnet_ami INT,
    FOREIGN KEY (id_carnet_ami) REFERENCES carnet_ami(id_carnet_ami)
);
INSERT INTO joueur (pseudo_joueur, mot_de_passe_joueur, mail_joueur, id_carnet_ami)
	VALUES ("Dark Schneider","12345","dark.s@gmail.com",1),
    ("Perceval","Kaamelott31","alexast@sfr.fr",2),
    ("Guts","berserker#666","ceska@orange.fr",3),
    ("Broly","cacarot974","guillaume@gmail.com",4),
    ("Suskiki666","NarutoIsTheBest","hinatainlove@sfr.fr",5);
-- CREATE UNIQUE INDEX pseudo_joueur ON joueur (`colonne1`);

CREATE TABLE personnage (
	id_personnage INT PRIMARY KEY AUTO_INCREMENT,
    nom_personnage VARCHAR(50) NOT NULL,
    id_joueur INT,
	id_type_personnage INT,    
    FOREIGN KEY (id_joueur) REFERENCES joueur(id_joueur),
    FOREIGN KEY (id_type_personnage) REFERENCES type_personnage(id_type_personnage)
);
INSERT INTO personnage (nom_personnage, id_joueur, id_type_personnage)
	VALUES ("Power Killer",1,1),
    ("Mordred",2,3),
    ("Griffith",3,3),
    ("Vegeta",4,2),
    ("Kakashi",5,2),
    ("Bohort",2,1),
    ("Lars",1,3);

CREATE TABLE achat (
	id_achat INT PRIMARY KEY AUTO_INCREMENT,
    date_achat DATETIME NOT NULL,
    id_personnage INT,
    id_costume INT,
    id_joueur INT,
	FOREIGN KEY (id_personnage) REFERENCES personnage(id_personnage),
    FOREIGN KEY (id_costume) REFERENCES costume(id_costume),
    FOREIGN KEY (id_joueur) REFERENCES joueur(id_joueur)
);

CREATE TABLE messages (
	id_messages INT PRIMARY KEY AUTO_INCREMENT,
    -- id_auteur INT,
	-- id_destinataire INT,
    date_messages DATETIME NOT NULL,
    sujet_messages VARCHAR(255) NOT NULL,
    message TEXT NOT NULL
    -- FOREIGN KEY (id_auteur) REFERENCES auteur(id_auteur),
    -- FOREIGN KEY (id_destinataire) REFERENCES destinataire(id_destinataire)
);

CREATE TABLE combats (
	id_combats INT PRIMARY KEY AUTO_INCREMENT,
    date_combats DATETIME NOT NULL,
    id_arene INT
	-- id_vainqueur INT,
    -- id_vaincu INT,
    -- FOREIGN KEY (id_arene) REFERENCES arene(id_arene),
    -- FOREIGN KEY (id_vainqueur) REFERENCES vainqueur(id_vainqueur),
    -- FOREIGN KEY (id_vaincu) REFERENCES vaincu(id_vaincu)
);

CREATE TABLE remporter (
	id_remporter INT PRIMARY KEY AUTO_INCREMENT
    -- id_combats INT,
	-- FOREIGN KEY (id_combats) REFERENCES combats(id_combats)
);

CREATE TABLE perdre (
	id_perdre INT PRIMARY KEY AUTO_INCREMENT
    -- id_combats INT,
	-- FOREIGN KEY (id_combats) REFERENCES combats(id_combats)
);

CREATE TABLE recevoir (
	id_recevoir INT PRIMARY KEY AUTO_INCREMENT
    -- id_messages INT,
	-- FOREIGN KEY (id_messages) REFERENCES message(id_messages)
);

CREATE TABLE envoyer (
	id_envoyer INT PRIMARY KEY AUTO_INCREMENT
    -- id_messages INT,
	-- FOREIGN KEY (id_messages) REFERENCES message(id_messages)
);

ALTER TABLE costume ADD COLUMN prix INT(5.2);

UPDATE costume SET prix = "20" WHERE id_costume = 1;
UPDATE costume SET prix = "35" WHERE id_costume = 2;
UPDATE costume SET prix = "35" WHERE id_costume = 5;
UPDATE costume SET prix = "15.50" WHERE id_costume = 3;
UPDATE costume SET prix = "29.5" WHERE id_costume = 4;

INSERT INTO achat (date_achat, id_joueur, id_costume, id_personnage)
	VALUES ("2022-05-10",1,1,1),
	("2022-06-01",1,2,7),
    ("2022-06-21",3,4,3),
    ("2022-06-21",1,3,1),
    ("2022-06-23",3,5,3),
    ("2022-07-03",5,1,5);


-- Acitver après


INSERT INTO combats (date_combats, id_arene, id_remporter, id_perdre)
	VALUES ("2022-06-23",1,1,2),
    ("2022-06-23",2,3,2),
    ("2022-07-01",3,6,5),
    ("2022-07-13",1,5,7),
    ("2022-07-15",1,4,1),
    ("2022-07-17",1,4,1);

INSERT INTO messages (id_envoyer, id_recevoir, date_messages, sujet_messages)
	VALUES (1,3, "2022-06-21","Hey","Salut bro ! Comment tu vas ?"),
    (3,1, "2022-06-21", "Re:Hey","Salut poto ! Ca va super. C'est l'éclate ce jeu. :D"),
    (1,3, "2022-06-22", "ReRe:Hey","Ha ha, t'as vu, je te l'avais dis. Heureusement que je t'ai bassiné avec pendant des plombes. ;)"),
    (3,1, "2022-06-22", "ReReRe:Hey","J'avoue XD Au passage, je viens de me payer la tenue de Jeane D'Arc. Tu sais, la version Fate Apocryphe"),
    (1,2, "2022-06-23", "Salut","Coucou toi. Je savais que t'étais sur le jeu. Comment tu vas"),
    (2,3, "2022-06-23", "Dis, t'aurais pas gaffé","Hé toi, par hasard, t'aurai pas dit à ton pote que j'étais sur le jeu. Non parce que ce relou vient de m'envoyer un message.");

SELECT joueur.pseudo_joueur
	FROM joueur;

SELECT joueur.pseudo_joueur,joueur.mail_joueur
	FROM joueur;



-- Jointure
 
SELECT type_personnage.type_perso, type_personnage.attaque, type_personnage.point_de_vie, type_personnage.defense, arene.nom, item.nom, item.bonus_de_point_de_vie, item.bonus_de_defense, item.bonus_attaque, costume.nom_costume, carnet_ami.nom_carnet_ami, obtenir.equipe, player.id_joueur, player.pseudo_joueur, player.mot_de_passe_joueur, player.mail_joueur, personnage.nom_personnage, achat.date_achat, combats.date_combats, messages.date_messages, messages.sujet_messages, messages.message
	FROM joueur
		JOIN remporter AS vainqueur ON vainqueur.id_remporter = combats.id_combats
        JOIN perdre AS vaincu ON vaincu.id_envoyer = combats.id_combats
        JOIN recevoir AS destinataire ON destinataire.id_recevoir = messages.id_messages
        JOIN envoyer AS auteur ON auteur.id_envoyer = messages.id_messages
        JOIN combats ON combats.id_combats = arene.id_arene
        JOIN item ON item.id_item = obtenir.id_obtenir
        JOIN obtenir ON obtenir.id_obtenir = personnage.id_personnage
        JOIN joueur AS player ON player.id_joueur = carnet_ami.id_carnet_ami
        JOIN contenir ON contenir.id_contenir = player.id_joueur
        JOIN carnet_ami ON carnet_ami.id_carnet_ami = contenir.id_contenir
        JOIN personnage ON personnage.id_personnage = achat.id_achat
        JOIN type_personnage ON type_personnage.id_type_personnage = personnage.id_personnage
        JOIN arene ON arene.id_arene = combats.id_combats
        JOIN achat ON achat.id_achat = player.id_joueur
        JOIN costume ON costume.id_costume = achat.id_achat
        JOIN messages ON messages.id_messages = player.id_joueur
        
        