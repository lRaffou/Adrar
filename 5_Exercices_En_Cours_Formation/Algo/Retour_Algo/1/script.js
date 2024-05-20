function countEs(s) {
    let total = 0;
    for(let i = 0 ; i < s.length ; i++) {
        if(s[i] == "e") {
            total++;
        }
    }
    return total;
}

let stations = ["compans", "ramonville", "theogone"];

let numberOfE = 0;
for(let i = 0 ; i < stations.length ; i++) {
    numberOfE += countEs(stations[i]);
}

console.log("Il y a", numberOfE, "'e' dans les noms du tableau.");


// 1) Combien de lectures de variables (pas de case de tableau) ?
console.log('Deux fois.');

// 2) Combien de fois on lit une case de tableau ? (On considère que les mots sont des tableaux)
console.log(28);

// 3) Combien d'appels de fonction ?
console.log('Quatre fois.');