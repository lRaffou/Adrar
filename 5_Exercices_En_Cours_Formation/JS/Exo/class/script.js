// Exercice Class : IMC

// Créer un programme permettant de Calculer l’IMC d’une personne
// IMC = Poids / Taille x Taille

// TODO :
// Créer une classe Imc avec un constructeur qui recevra un nom, un poids, une taille

// class ImcUser {
//     constructor(nom, poids, taille) {
//         this.nomUser = nom;
//         this.poidsUser = poids;
//         this.tailleUser = taille;
//     }
//     Imc(poids, taille) {
//         let v = poids / (taille * taille);
//         return v.toFixed(2);
//     }
//     display() {
//         console.log(`${this.nom}+ '' + ${this.poids}+ '' +${this.taille}+ '' +${this.Imc}`);
//     }
// }

// Créer une fonction de calcul d’IMC, qui retourne le résultat du calcul (à 2 nombre après la virgule si possible)

// Créer une fonction d’affichage « display », elle a pour rôle d’afficher en console : Le nom de la personne, son poids, sa taille et son imc dans une phrase

// En dehors de la class (donc dans le programme principal), récupérer la variable list (un tableau de nouvelle instances de la class) (voir discord ou 👇 )
// let list = [
//     new Imc("Sébastien Chabal", 135, 1.7),
//     new Imc("Escaladeuse", 45, 1.68),
//     new Imc("JOJO ", 300, 2),
//     new Imc("Gontrand ", 90, 1.75),
//     new Imc("Colonel Clock ", 200, 1.75),
//     new Imc("JOsiane de la Vega", 99, 1.55),
// ];

// Trouver un moyen de parcourir les éléments dans la variable list, sur chaque element utiliser la fonction display

// ----------------------------------------------

// Gérer une PME
// CDC
// Un Salarié a un nom, prénom, âge, salaire mensuel
// Il est payé sur N mois.
// En plus il y a XXX de charges
// Une Pme c’est un nom, une équipe de plusieurs salariés
// Grace à ses ventes elle a des revenus R
// Mais aussi … :
// des frais fixes FF (impôts etc…)
// Des frais d’achats de matériel et de logiciels FA
// TODO :
// Créer une classe Pme et une classe Employee
// Utiliser des fonctions
// Faire le bilan annuel de l’entreprise et l’afficher en console.
// Détails :
// 3 salariés qui gagnent par mois : 2000, 3000 et 4000 euros
// R = 300000 (trois cent mille)
// FF = 20000 (vingt mille)
// FA = 50000 (cinquante mille)
// N = 12
// XXX = 90%

// // // Scénario
// const pme = new Pme(
//     //Le nom entreprise
//     (this.nom = "Ma Petite Entreprise - "),
//     //L'equipe de salariés (un tableau)
//     [
//         new Employee("Duval", "Paul", 30, 2000),
//         new Employee("Durand", "Alain", 40, 3000),
//         new Employee("Dois", "Sylvia", 50, 4000),
//     ]
// );
// //le revenu , frais fixe, frais d'achat
// pme.bilanCalculed();

// class Pme {
//     constructor(nom, nEmployee) {
//         this.nom = nom;
//         this.nEmployee = nEmployee;
//     }
//     charges() {
//         let N = 12;
//         let result = salaire * 0.9 * N;
//         return result;
//     }
//     frais() {
//         let R = 300000;
//         let FF = 20000;
//         let FA = 50000;
//         let result = (FF + FA) - R;
//         return result;
//     }
// }
// console.log(pme);

// class Employee {
//     constructor(nom, prenom, age, salaire) {
//         this.nom = nom;
//         this.prenom = prenom;
//         this.age = age;
//         this.salaire = salaire;
//     }
// }


// Exo Class COMPTES BANCAIRES.
// Enoncé
// Gérer des compte en banque
// Consignes
// Créer une classe CompteBancaire avec des méthodes de crédit, de retrait, de visualisation de
// l’état du compte bancaire (en console), on doit pouvoir aussi faire un virement d’un membre à
// un autre.
// Générer une exception pour ne pas dépasser le solde (pas de retrait ou de virement qui
// dépassent le solde du compte bancaire)
// Détails
// Faire une scénario avec gestion de 3 comptes crédités à 1000 € chacun (Alex, Clovis, Marco)
// Puis Alex retire 100
// Puis Marco fait un virement de 300 à Clovis
// Enfin Alex tente un retrait de 1200
// Afficher tous les soldes finaux.
// Ces compte sont placés dans un tableau associatif de clients
// En conso


class CompteBancaire {
    constructor(nom, solde=0) {
        this.nom = nom;
        this.solde = solde;
    }
    credit(c) {
        let result = this.solde + c;
        return result;
    }
    retrait(r) {
        result = this.solde - r;
        return result;
    }
    visu() {
        console.log(CompteBancaire.credit()-CompteBancaire.retrait());
    }
}
