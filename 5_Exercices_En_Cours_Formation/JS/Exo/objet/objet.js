// //LES OBJETS
// //Déclaration

// let formateur = {
//     nom : "Yoann",
//     age : 21,
//     specialite : "Dev",
//     hobbies : [
//         {
//             nom : "Magic the gathering",
//             type : "TCG"
//         },
//         {
//             nom : "Donjon et Dragon 5 Edition",
//             type : "Jeu de Rôle"
//         }
//     ]
// }

// //Accéder aux données d'un objet : syntaxe objet
// console.log(formateur);
// console.log(formateur.hobbies);
// console.log(formateur.hobbies[0]);
// console.log(formateur.hobbies[0].nom);

// //Accéder aux données d'un objet : syntaxe tableau associatif
// console.log(formateur);
// console.log(formateur["hobbies"]);
// console.log(formateur["hobbies"][0]);
// console.log(formateur["hobbies"][0]["nom"]);

// //Ajouter une propriété à un objet
// let variable = {};
// variable.nom = "Yoann";
// console.log(variable);

// //suppression d'une propriété
// delete variable.nom;

// //vérifier qu'un objet possède une propriété
// console.log(variable.hasOwnProperty("nom"));
// console.log(variable.nom != undefined); //fonctionne mais est moins sémantique

// //Accéder à l'ensemble des noms des clé/propriété d'un objet
// console.log(Object.keys(formateur));



// Exercice 9 :
// TODO : Reprendre l'exercice 2 (⁠javascript⁠) en mode objet
// (un objet user avec des propriétés pour le nom age et passions
// qui est lui aussi un objet avec 2 propriétés

let nom = {};
let age  = {};
let passion  = {};
let tabUser = [nom, age, passion];

tabUser.nom = "Raphaël";
tabUser.age = 36;
passion.jeu = "Dbz";
passion.film = "Le loup de Wall Street";

console.log(tabUser);
console.log(tabUser[2]);