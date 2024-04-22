
// // A1
// // Initialisation
// setPos(300,300);
// faceDown();
// changeColor(color.red);
// setLineWidth(10);

// // Réalisation
// forward(200);
// faceRight();
// forward(100);


// A2
// Initialisation
setPos(300,300);
faceRight();
changeColor(color.red);
setLineWidth(10);

// Réalisation
for(let i = longueur; i < 2; i++) {
    let longueur = 50;
    forward(longueur);
    right(120);
    forward(longueur);
}