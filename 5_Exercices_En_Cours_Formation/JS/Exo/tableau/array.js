// const tab = [3,1,2, false, true, "Hello Wolrd !"];
// console.log(tab);

// //Methode push() : ajouter une valeur à la fin d'un tableau
// tab.push("Ma nouvelle valeur");
// console.log(tab);

// //Methode pop() : supprimer la dernière valeur d'un tableau
// let pop = tab.pop(); //ici je récupère dans une variable ce que pop() a enlevé de mon tableau
// console.log(tab);
// console.log(pop);

// //Methode unshift() : ajouter une valeur au début d'un tableau
// tab.unshift("Première valeur");
// console.log(tab);

// //Methode shift() : supprime la prmeière valeur d'un tableau
// let shift = tab.shift();
// console.log(tab);
// console.log(shift);

// //Method sort() : range un tableau dans l'ordre
// tab.sort();
// console.log(tab);

//! EXO 4 ARRAYS
//TODO: Créer 1 variable pour un nom,
let nom;

//TODO: Créer une variable pour un âge,
let age;

//TODO: Créer une variable passions qui est un tableau qui contient 2 chaînes de caractères (au choix)
let passion;

//TODO: Puis créer une variable tabUser qui est un tableau qui contient les variable du nom, de l'âge et passions
let tabUser = [nom, age, passion];

//TODO: en Console on affiche le tabUser
console.log(tabUser);

//TODO : en passant par tabUser on veut afficher en console uniquement les passions
console.log(tabUser[2]);

//TODO : en passant par tabUser on veut afficher en console uniquement la 2ème passion
// console.log(tabUser[2][1]);

// Exercice 3 :
//  Ajout ƒ° .push()

//TODO : créer un nouveau tableau qui contient des trucs
let newTab = [2, `Salut`, 50, `oui`, `non`];

//TODO : allez se renseigner la ƒ° push()

//TODO : utiliser push pour ajouter un nouveau truc au tableau
newTab.push(`france`);

//TODO: On affiche en console ce tableau
console.log(newTab);


// Exercice 4 :
// ARRAYS Récap
// TODO: Créer 2 variables leNom et lePrénom
let leNom = `Raff`;
let lePrémon = `Lou`;

//TODO: Créer un tableau laPhrase et on y ajoute via push, Le nom ,Le prénom Les initiales
let laPhrase = [];
laPhrase.push(leNom, lePrémon, lePrémon[0], leNom[0]);


//TODO: Afficher le tableau dans la console le nom le prénom et les initiales 
console.log(laPhrase);
