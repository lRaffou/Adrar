// Conditions SWITCH
//Test une égalité entre une valeur à tester et différents cas de figure. Et si aucun cas n'est vérifier, alors le cas default s'applique.

let valeurATester = 1;
switch(valeurATester){
    case 1 :
        valeurATester ++;
        console.log(valeurATester);
        break;
    case 2 :
        valeurATester +=2;
        console.log(valeurATester);
        break;
    case 4 :
        valeurATester +=3;
        console.log(valeurATester);
        break;
    default :
        console.log("Rien ne marche");
        break;
}

//Méthode de Ninja pour tester des inégalité :
// On passe true comme valeur à tester, et les case sont nos différentes inégalité possible
valeurATester =1;
switch(true){
    case valeurATester < 2 :
        console.log("inférieur à 2");
        break;
    case valeurATester > 2 :
        console.log("supérieur à 2");
        break;
    default :
        console.log("Egal à 2");
        break;
}
