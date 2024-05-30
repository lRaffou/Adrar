// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWlRf3lI3VOgQSOSJ0j1WNrtuS6-_mKzE",
    authDomain: "cours-firebase-30ecb.firebaseapp.com",
    databaseURL:
        "https://cours-firebase-30ecb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cours-firebase-30ecb",
    storageBucket: "cours-firebase-30ecb.appspot.com",
    messagingSenderId: "358056204607",
    appId: "1:358056204607:web:b755b2fcfd31741e321b8a",
    measurementId: "G-4N4D3P64EN",
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//Initialisation de firebase
firebase.initializeApp(firebaseConfig);

//Créer une référence à notre BDD
const dbRef = firebase.database().ref();

//Créer une référence à notre noeud/table
const userRef = dbRef.child("users");

//Ciblage des éléments
const monForm = document.querySelector("form");
const submit = document.querySelector("input[type='submit']");
const name = document.querySelector("input[name='name']");
const age = document.querySelector("input[name='age']");
const mail = document.querySelector("input[name='mail']");

//Event Listener sur bouton submit pour envoyer les données à firebase
submit.addEventListener("click", (event) => {
    event.preventDefault();
    registerUser();
});

//Définition de la fonction d'enregistrement d'un user :
//1) On récupère les informations du formulaire
//2) On créer un objet portant les données de notre formulaire (clé - valeur)
//3) On va se connecter à Firebase
//4) On envoie notre objet au noeud "users"
function registerUser() {
    //2) Notre objet user vide
    const newUser = {};

    //1) Récupère nos infos de nos input
    const tabInput = document.querySelectorAll("input[type='text']");
    for (let input of tabInput) {
        //Récupération du nom de la clé de chaque input (ici dans l'attribut name de chaqe balise <input>)
        let key = input.getAttribute("name");

        //Récupérer la value de mon input
        let value = input.value;

        //Ajout de notre couple clé - valeur à notre objet newUser
        newUser[key] = value;
    }
    console.log(newUser);

    //4) Envoyer notre utilisateur à Firebase en BDD :
    //ajouter notre utilisateur au noeud "users", en le pushant dans userRef
    userRef.push(newUser);
    console.log(userRef);
}
