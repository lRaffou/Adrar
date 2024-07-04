USE blog;

-- A partir de la BDD Blog
-- 1) Enregistrer 3 Commentaires. Utiliser une sous-requête pour remplir les clés étrangères id_article et id_utilisateur

-- 2) Modifier l'auteur d'un article existant, en utilisant une sous-requête pour id_utilisateur,
-- où vous utiliserez le nom, le prenom ET l'email du nouvel auteur

-- (INSERT INTO utilisateurs (utilisateurs.email, utilisateurs.mdp, utilisateurs.nom, utilisateurs.prenom, utilisateurs.avatar) VALUES ("mail@mail.com", "azerty", "Toto", "Titi","avatarLuffy"))
-- AND (INSERT INTO commentaires (commentaires.commentaire, commentaires.note) VALUES ("d"))

INSERT INTO utilisateurs (utilisateurs.email, utilisateurs.mdp, utilisateurs.nom, utilisateurs.prenom, utilisateurs.avatar)
														VALUES ("mail@mail.com", "azerty", "Toto", "Titi","avatarLuffy");
INSERT INTO articles (articles.titre, articles.contenu, articles.description_articles, articles.image, articles.is_Premium)
														VALUES ("le titre", "le contenu", "la description", "l'image ",true);
INSERT INTO commentaires (commentaire, note, id_article, id_utilisateurs)
	VALUES ("Ça c'est du commentaire mon pote!", 5, (SELECT id_article FROM articles WHERE id_utilisateurs = "1") AND (SELECT id_utilisateurs FROM utilisateurs WHERE articles.titre = "le titre"));