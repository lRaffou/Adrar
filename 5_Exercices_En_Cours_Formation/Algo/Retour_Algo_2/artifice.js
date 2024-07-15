// Créer une fonction qui reçoit un nombre en entrée et qui retourne un tableau de la taille demandée, ne contenant que des " ".

function tabSize(n) {
    return Array(n).fill(" ");
}
console.log(tabSize(10));

// Créer un tableau appelé ciel qui, initialement, ne contient que des lignes d'espaces. Chaque ligne sera de taille 10, et il y aura 7 lignes.

// Note : pour la suite de l'exercice, on peut utiliser ciel comme une variable globale, disponible dans les fonctions. Si vous souhaitez faire les choses plus proprement, vous pouvez l'ajouter aux arguments des fonctions !

const sky = [];
// const space = " ";
// const line = []; // 10
// const nbLine = []; // 7



for(let i = 0; i < 7; i++) {
    // for(let i = 0; i < 10; i++) {
    //     line.push(" ");
    // }
    sky.push(tabSize(10));
}


console.log(sky);


// Créer une fonction d'affichage du ciel (en créant une seule chaîne de caractères, avec le caractère "\n" pour aller à la ligne).

tabSize(10).forEach(() => tabSize(10).join("\n"))

console.log(tabSize(10).join("\n"),sky.join("\n"));



// Créer une fonction explosion qui reçoit deux nombres en entrées et qui place dans le ciel une explosion de feu d'artifice. Cette explosion sera dessinée avec un "+" au milieu et des "-", "|" le long des quatres côtés.
// Exemple :
// [
// 	[" "," "," "," "," "," "," "," "," "," "],
// 	[" "," "," ","|"," "," "," "," "," "," "],
// 	[" "," "," ","|"," "," "," "," "," "," "],
// 	[" ","-","-","+","-","-"," "," "," "," "],
// 	[" "," "," ","|"," "," "," "," "," "," "],
// 	[" "," "," ","|"," "," "," "," "," "," "],
// 	[" "," "," "," "," "," "," "," "," "," "]
// ]
// Affichage correspondant (en mettant tout bout à bout) :
//          
//   |      
//   |      
// --+--    
//   |      
//   |      
// Variante bonus : ajouter un autre argument à la fonction pour pouvoir changer la taille de l'explosion !

// En (re)partant d'un ciel vide de taille 10x7, ajouter des étoiles en :
// (1,1)
// (3,3)
// (5,3)
// (7,5)
// (9,3)
// Comptez (pas à la main !) combien il reste de caractère espace dans le ciel. Vous devriez en avoir 39.
