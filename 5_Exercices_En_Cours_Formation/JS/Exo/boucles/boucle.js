// //Boucle WHILE
// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// //Boucle FOR
// for(let i = 0; i<10; i++){
//     console.log(i);
// }

// //Bouclons sur un tableau
// let tab = [0,1,2,3];
// for(let i = 0; i<tab.length; i++){
//     console.log(tab[i]);
// }

//Méthode plus simple : la méthode Foreach()
// tab.forEach((element)=>{
//     element++;
//     console.log(element);
// });
// console.log(tab);

// //Si on veut modifier notre tableau, il faut passer 2 paramètre optionnels. Le 1er pour l'index de la case en cours. Le 2nd pour le tableau à modifier
// tab.forEach((element,index,tab)=>{
//     element++;
//     tab[index]=element;
//     console.log(element);
// });
// console.log(tab);

// //autre mainère pour la fonction fléché : la conserver dans une variable pour la rappeler dans un callback
// /*let display = (element)=>{console.log(element)};
// tab.forEach(display);*/

// //Autre Boucle pour les Tableau : For...Of
// for(let element of tab){
//     element++;
//     console.log(element);
// }

// //Autre Boucle pour les Tableau : la méthode map() -> renvoie un nouveau tableau, avec dans chaque case le return de la fonction fléché (la fonction callback)
// let stock = tab.map((element)=>{
//     element++;
//     console.log(element);
//     return element;
// })
// console.log(stock);

// //Boucle pour les Objet : For...In
// let object = {
//     nom : "Yoann",
//     age : 21,
//     passion : ["Magic","Jeu de Rôle"]
// }

// for(let propriete in object){
//     console.log(propriete +" = "+object[propriete]);
// }

// Exercice 10 : Boucle
// TODO :JS map phase 1
// TODO : côté template html rajouter plein de <p></p>
// TODO :On va récupérer TOUS les <p> de notre page dans une variable lesTxt via getElementsByTagName
// TODO :On va faire un console log de lesTxt

let lesTxt = document.getElementsByTagName("p");
console.log(lesTxt);

// Exercice 11 : Boucle Two
//TODO JS map Phase 2
//TODO Avec la methode Array.from(), dans une nouvelle variable textesTab on va transformer notre htmlCollection en array
//TODO On console log la variables textesTab
//* On transforme le HTMLCollection(qui contient tous nos <p>) en Array classique
let textTab = Array.from(lesTxt);
console.log(textTab);

// Exercice 12 : Boucle THREE !!!
//TODO JS Map Phase 3 (on peut travailler sur un Array)
//TODO Sur textesTab on va utiliser la ƒ° map(),
//TODO dans map(), on va lui passer en param une fonction fléchée qui elle a en parametre une variable temporaire (nom de la variable au choix)
//TODO cette fonction fléchée elle va modifier le innerText

textTab.map(varT => {
    varT.innerText = "gsqsgqfdgq";
});
console.log(textTab);

// Exercice 13 : Tableaux dans un Tableau
// voici un tableau contenant des tableaux :
// [[1,2,3],[4,5,6],[7,8,9]]

// A l'aide de boucle, afficher la valeur de chaque case
// Cela doit donner :
// 1
// 2
// 3
// 4
// ...

let tab13 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
tab13.forEach(element => {
    element++;
    console.log(element);
});


