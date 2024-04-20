// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1() {
    console.log(17);
}
f1();

// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
function f2() {
    return 17;
}

// Utiliser la fonction f2 pour afficher 17 dans la console.
console.log(f2());

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
console.log(`Permet de retourner une valeur`);

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(n) {
    return n * 2;
}
console.log(f3(10));

// Utiliser la fonction f3 pour écrire dans la console le double de 99.
function f3(n2) {
    return n2 * 2;
}
console.log(f3(99));

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(n3) {
    console.log(n3 * 2);
}
f4(50);

// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f3(99));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f3(99);
console.log(a);

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(n4, n5) {
    console.log(n4 + n5);
}

// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42, 77);

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(n6, n7) {
    return n6 + n7;
}

// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42, 77));

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a += f6(42, 77);
console.log(a);
  
// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(n8, n9) {
    if (n8 < n9) {
        return n9;
    } else {
        return n8;
    }
    // } else if (n8 >= n9) {
    //     return n8;
    // }
    // else if (n8 <= n9) {
    //     return n9;
    // }
}
console.log(f7(55, 55));
// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8(n10, n11, n12) {
    if (n10 >= n11 && n10 >= n12) {
        return n10;
    } else if (n12 <= n11 && n12 >= n10) {
        return n12;
    } else if (n11 <= n12 && n11 <= n10) {
        return n11;
    } else if (n10 === n11 && n10 === n12 && n11 === n12) {
        return n10;
    }
}
console.log(f8(1500, 151, 1500));
// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
