// Les consignes réécrites de l'exercice :
// Cibler le textArea dans une variable monTxt
// Cibler la div dans une variable rendu
// récupérer dans la Local Storage la valeur de la clé 'monSuperTexte', et l'injecter dans monTxt
// Faire une condition :
// SI la propriété value de monTxt n'est pas null
// ALORS on récupère depuis le local Storage la valeur de la clé 'monSuperTexte', et l'injecter dans rendu
// Ajouter un Event Listener sur monTxt. Lorsque l'on a relaché une touche du clavier :
// on enregistre le contenu de monTxt en Local Storage sous la clé 'monSuperTexte'
// puis on insère le contenu de monTxt dans rendu

let monTxt = document.querySelector("textarea");
let rendu = document.querySelector("div");
let id = document.querySelectorAll("input");
console.log(id);
const texteLocalStorage = localStorage.getItem("monTextarea");
const idLocalStorage = localStorage.getItem("monLogin");
const mdpLocalStorage = localStorage.getItem("monId");
if (texteLocalStorage) {
    monTxt.value = texteLocalStorage;
}
if (idLocalStorage) {
    id[0].value = idLocalStorage;
}
if (mdpLocalStorage) {
    id[1].value = mdpLocalStorage;
}

const remove = localStorage.removeItem("monSuperTexte");

monTxt.addEventListener("input", () => {
    const nouveauTexte = monTxt.value;
    const newId = id[0].value;
    const newMdp = id[1].value;
    localStorage.setItem("monTextarea", nouveauTexte);
    localStorage.setItem("monLogin", newId);
    localStorage.setItem("monId", newMdp);
    rendu.innerText = nouveauTexte;
});