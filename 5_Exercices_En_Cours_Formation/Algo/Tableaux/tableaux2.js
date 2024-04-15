// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
let tab = [
    243, 422, 415, 824, 646, 944, 194, 294, 521, 321, 726, 198, 498, 167, 279,
    936, 631, 676, 807, 229, 768, 957, 562, 131, 575, 393, 700, 584, 641, 253,
    772, 173, 794, 174, 255, 150, 586, 189, 393, 322, 619, 656, 520, 632, 611,
    188, 867, 295, 646, 551,
];

function monTab1(tab) {
    console.log(tab[tab.length - 1]);
}

monTab1(tab);

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function monTab2(tab) {
    let dernierElement = tab[tab.length - 1];
    return dernierElement;
}
console.log(monTab2(tab));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function monTab3(tab) {
    let minimum = tab[0];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] < minimum) {
            minimum = tab[i];
        }
    }
    return minimum;
}
console.log(monTab3(tab));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function monTab4(tab) {
    let maximum = tab[0];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > maximum) {
            maximum = tab[i];
        }
    }
    return maximum;
}
console.log(monTab4(tab));

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function search(tab, n) {
    
}

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].

// Créer un tableau qui contient [10,20,30,...,77770].

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]
