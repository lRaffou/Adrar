// 1) Créer un tableau tab1 de 6 cases, qui contient les nombres 144, 202, 216, 216, 222 et 64.
let tab1 = [144, 202, 216, 222, 64];

// 2) Ajouter le nombre 0 à la fin du tableau tab1.
tab1.push(0);

// 3) Afficher *un par un* tous les éléments du tableau tab1.
console.log(tab1);

// 4) Retirer le dernier élément du tableau tab1.
tab1.pop();

// 5) Créer un tableau tab2 qui contient les nombres 238, 222, 228, 216, 200.
let tab2 = [238, 222, 228, 216, 200];

// 6) Ajouter le nombre 58 à la fin de tab2.
tab2.push(58);

// 7) Ajouter *un par un* tous les éléments du tableau tab2 à la fin du tableau tab1.
console.log(tab1, tab2);

// 8) Afficher *un par un* tous les éléments du tableau tab1.
console.log(tab1);

// 9) Retirer et stocker dans la variable maVariable le dernier élément du tableau tab1.
tab1.pop();
maVariable = (tab1.pop)

// 10) Afficher la taille du tableau tab1.
console.log(tab1.length);
// 11) Ajouter le nombre 66 à la fin du tableau tab1.
tab1.push(66);

// 12) Diviser par 2 toutes les variables contenues dans le tableau tab1.
console.log(tab1[0]/2);
console.log(tab1[1]/2);
console.log(tab1[2]/2);
console.log(tab1[3]/2);
console.log(tab1[4]/2);

// 13) Pour vérifier si vous êtes correctement arrivé(e) jusqu'ici, essayez les deux lignes de code suivantes :
console.log(tab1.reduce((acc,cur)=> acc+String.fromCharCode(cur),""));
console.log(String.fromCharCode(maVariable)+String.fromCharCode(maVariable-17));
// (On ne cherchera pas à comprendre ça)