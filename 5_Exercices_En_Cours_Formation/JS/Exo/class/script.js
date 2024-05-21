// Exercice Class : IMC

// Créer un programme permettant de Calculer l’IMC d’une personne
// IMC = Poids / Taille x Taille


// TODO :
// Créer une classe Imc avec un constructeur qui recevra un nom, un poids, une taille

class ImcUser {
    constructor(nom, poids, taille) {
        this.nomUser = nom;
        this.poidsUser = poids;
        this.tailleUser = taille;
    }
    imc(poids, taille) {
        let v = poids / (taille * taille);
        return v.toFixed(2);
    }
    display() {
        console.log(`${this.nom}+ '' + ${poids}+ '' +${taille}+ '' +${imc}`);
    
    }
}

// Créer une fonction de calcul d’IMC, qui retourne le résultat du calcul (à 2 nombre après la virgule si possible)

console.log(imc(74, 1.63));


// Créer une fonction d’affichage « display », elle a pour rôle d’afficher en console : Le nom de la personne, son poids, sa taille et son imc dans une phrase

function display() {
    console.log(`${nom}+ '' + ${poids}+ '' +${taille}+ '' +${imc}`);

}
display()

// En dehors de la class (donc dans le programme principal), récupérer la variable list (un tableau de nouvelle instances de la class) (voir discord ou 👇 )
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
];

// Trouver un moyen de parcourir les éléments dans la variable list, sur chaque element utiliser la fonction display
