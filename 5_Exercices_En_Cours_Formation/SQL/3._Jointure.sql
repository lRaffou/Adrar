CREATE DATABASE blog;

USE blog;

CREATE TABLE utilisateurs(
	id_utilisateurs INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
	mdp VARCHAR(150) NOT NULL,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    avatar VARCHAR(255) NOT NULL
);
CREATE TABLE categories(
	id_categorie INT PRIMARY KEY AUTO_INCREMENT,
	categorie VARCHAR(50) NOT NULL UNIQUE
);
CREATE TABLE articles(
	id_article INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255),
    contenu TEXT,
    description_articles TEXT,
    image VARCHAR(255),
    is_Premium BOOLEAN,
    id_utilisateurs INT,
    FOREIGN KEY (id_utilisateurs) REFERENCES utilisateurs(id_utilisateurs)
);
CREATE TABLE commentaires(
	id_commentaires INT PRIMARY KEY AUTO_INCREMENT,
    commentaire TEXT,
    note INT,
    id_article INT,
    id_utilisateurs INT,
    FOREIGN KEY (id_article) REFERENCES articles(id_article),
    FOREIGN KEY (id_utilisateurs) REFERENCES utilisateurs(id_utilisateurs)
);
CREATE TABLE categoriser(
	id_article INT,
    id_categorie INT,
    FOREIGN KEY (id_article) REFERENCES articles(id_article),
    FOREIGN KEY (id_categorie) REFERENCES categories(id_categorie)
);
   
SELECT auteurs.email, auteurs.mdp, auteurs.nom, auteurs.prenom, auteurs.avatar, categories.categorie, articles.titre, articles.contenu, articles.description_articles, articles.image, articles.is_Premium, commentaires.commentaire, commentaires.note
	FROM articles
		JOIN categoriser ON categoriser.id_article = articles.id_article
        JOIN categories ON categorie.id_categorie = categoriser.id_categorie
		JOIN utilisateurs AS auteurs ON auteurs.id_utilisateurs = articles.id_article
        JOIN commentaires ON commentaires.id_article = articles.id_article
        JOIN utilisateurs ON auteurs.id_utilisateurs = commentaires.id_utilisateurs