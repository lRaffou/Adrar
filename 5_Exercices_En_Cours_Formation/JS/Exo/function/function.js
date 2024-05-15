// function buggyFunction() {
//     let wtf = 9;
//     console.log(wtf);
// }
// buggyFunction();
// // console.log(wtf);

// let something = 44;
// function functionBugParent() {
//     let something = 9;
//     console.log(something);
//     // console.log(lesNews);
// }

// function functionBugEnfant() {
//     let lesNews = `il est 99h67`;
//     console.log(lesNews);

// }
// functionBugParent();
// console.log(something);
// functionBugEnfant();

// // Exercice 7 : Calcul de la Moyenne
// //TODO: Créer une fonction qui calcule la moyenne de 2 notes
// function moyen(a, b) {
//     return (a + b) / 2;
// }

// //TODO: Afficher le résultat en console
// console.log(moyen(50, 150));



// /*EXERCICE 5
// //TODO : Pourquoi ca beug ?
// function buggyFunction() {
// let wtf = 9;
// console.log(wtf);
// };
// buggyFunction();
// console.log(wtf);
// */
// let wtf = 9;
// function buggyFunction() {
//     console.log(wtf);
// };

// buggyFunction();
// console.log(wtf);


// /*EXERCICE 6
// //TODO : Pourquoi ca beug / Pourquoi ca marche pas ?
// let something = 44;
// function functionBugParent() {
// let something = 9;
// console.log(something);
// console.log(lesNews);
// function functionBugEnfant() {
// let lesNews = `il est 99h67`;
// }
// };
// functionBugParent();
// console.log(something);
// */

// let something = 44;
// function functionBugParent() {
//     let something = 9;
//     let lesNews = `il est 99h67`;
//     console.log(something);
//     console.log(lesNews);
// };
// functionBugParent();
// console.log(something);



// /*Exercice 7 : Calcul de la Moyenne
// //TODO: Créer une fonction qui calcule la moyenne de 2 notes
// //TODO: Afficher le résultat en console
// */
// function moyenne(note1,note2){
//     return (note1 + note2)/2;
// }
// console.log(moyenne(10,12)); //affiche 11


// Exercice 8 : Else If

// TODO: Créer une fonction qui reçoit un tableau de 3 notes et qui calcule une moyenne entre ces 3 notes
function note(tab=[a, b, c]) {
    let result = (tab[0]+tab[1]+tab[2]) / 3;
    console.log(result)
}
console.log(note(15,12,19));


// TODO: Dans cette ƒ°, SI la moyenne est supérieure ou égale à 15 on renvoi une string (très Bien)



// TODO: Dans cette ƒ°, SINON SI la moyenne est supérieure ou égale à 10 on renvoi une string (assez Bien)



// TODO: Dans cette ƒ°, SINON renvoi une string (refus)