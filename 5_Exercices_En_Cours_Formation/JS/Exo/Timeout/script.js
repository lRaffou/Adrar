const body = document.querySelector("body");

// setTimeout(() => {
//     body.style.background =
//         "radial-gradient(circle, rgba(2,0,36,1) 48%, rgba(138,138,228,1) 93%, rgba(0,212,255,1) 100%)";
//     body.style.color = "white";
// }, 2500);

// // Dans une page HTML, créer une div qui a une hauteur de 150px, une largeur de 300px et une couleur de fond bleu
// // Dans le Javascript : faite en sorte que la div suive le mouvement de la souris (event mousemove,  il faudra modifier les coordonnés de la div en fonction des coordonnés de l'event)
// // Faire en sorte qu'au bout de 5 secondes, on supprime l'Event Listener (méthode removeEventListener())

// const div = document.querySelector("div");

// div.style.height = "150px";
// div.style.width = "300px";
// div.style.background = "blue";
// div.style.position = "absolute";

// // body.append(div);

// document.addEventListener("mousemove", event => {
//     div.style.left = event.clientX + "px";
//     div.style.top = event.clientY + "px";
//     console.log(div)
// })

// Exercice SetInterval :

// Dans un fichier html, créer un div, donner lui une hauteur et une largeur de 50px, donner lui un border-radius de 50%, une couleur de fond bleu, un position absolute, et un top de 200px et un left de 0px
// En Javascript, déplacer la div de 5px tous les 50ms
// Arrivé à une position left de 700px, remeter la à 0px

const div = document.querySelector("div");

div.style.height = "50px";
div.style.width = "50px";
div.style.borderRadius = "50%";
div.style.background = "blue";
div.style.position = "absolute";
div.style.top = "200px";
div.style.left = "0px";

// function action() {
//     div.style.margin = "5px, 5px";
// }

let i = 5;
let j = 5;

setInterval(() => {
    div.style.left = i + "px";
    i += 5;
    // if (i >= 700) {
    //     i = 0;
    // }
}, 10);
setInterval(() => {
    div.style.top = j + "px";
    j += 5;
    
    if (i >= 600) {
        div.style.top = j + "px";
    }
// }, 10);
