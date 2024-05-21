const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe"
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable"
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25
    }
];

//1) Créer une constante tabData et lui assigner un tableau vide.
const tabData =[];

//2) Ajouter à tabData les const usersHuman, usersPet et usersXeno dans l'ordre de votre choix, grâce à une méthode de tableau.
tabData.push(usersHuman,usersPet,usersXeno);

//console.log(tabData);


/*3) Créer la fonction afficherHummain() qui prendra un objet en paramètre.
Faire en sorte qu'elle affiche dans la console le profil d'un humain sous la forme :
----------------------------------------
nom : nom_de_l'objet
email : mail_de_l'objet
age : age_de_l'objet ans
----------------------------------------*/

//Entrée : un des profil contenu dans usersHuman
//Sortie : ne retourne rien
function afficherHumain(objet){
    console.log(`----------------------------------------
nom : ${objet.name}
email : ${objet.email}
age : ${objet.age} ans
----------------------------------------`)
}

//afficherHumain(usersHuman[0]);

/*4) Créer la fonction afficherAnimal() qui prendra un objet en paramètre.
Faire en sorte qu'elle affiche dans la console le profil d'un animal sous la forme :
----------------------------------------
nom : nom_de_l'objet
espece : espece_de_l'objet
age : age_de_l'objet ans
propriétaire : propriétaire_de_l'objet
----------------------------------------*/

//Entrée : un des profil contenu dans usersPet
//Sortie : ne retourne rien
function afficherAnimal(objet){
    console.log(`----------------------------------------
nom : ${objet.name}
espece : ${objet.espece}
age : ${objet.age} ans
proprietaire : ${objet.propriétaire}
----------------------------------------`)
}

//afficherAnimal(usersPet[0]);

/*5) Créer la fonction afficherXeno() qui prendra un objet en paramètre.
Faire en sorte qu'elle affiche dans la console le profil d'un Xéno sous la forme :
----------------------------------------
nom : nom_de_l'objet
espece : espece_de_l'objet
age : age_de_l'objet ans
niveau de menace: menace_de_l'objet
----------------------------------------*/
//Entrée : un des profil contenu dans usersXeno
//Sortie : ne retourne rien
function afficherXeno(objet){
    console.log(`----------------------------------------
nom : ${objet.name}
espece : ${objet.espece}
age : ${objet.age} ans
niveau de menace : ${objet.menace}
----------------------------------------`)
}

//afficherXeno(usersXeno[0]);

/*6) Créer une fonction profil() qui prend un tableau d'objet en paramètre.

7) Faire en sorte que la fonction profil() parcourt chaque objet du tableau.

8) Dans la fonction profil(), pour chaque objet, SI l'objet est de type "humain", appeler la fonction afficherHumain(). SINON SI l'objet est de type "animal de compagnie", appeler la fonction afficherAnimal(). SINON SI l'obet est de type "Xeno", appeler la fonction afficherXeno(). SINON afficher dans la console, le message d'erreur "Type de Profil non Existant".*/

//Entrée : une des constante usersHuman, usersPet, ou usersXeno
//Sortie : rien (void)
function profil(tabObjet){
    //La Classique Boucle For
    /*for(let i = 0; i<tabObjet.length; i++){
        if(tabObjet[i].type == "humain"){
            afficherHumain(tabObjet[i]);
        }else if(tabObjet[i].type == "animal de compagnie"){
            afficherAnimal(tabObjet[i]);
        }else if(tabObjet[i].type == "Xeno"){
            afficherXeno(tabObjet[i]);
        }else{
            console.log("Type de Profil non Existant");
        }
    }*/

    //La Boucle ForEach()
    /*tabObjet.forEach(objet => {
        switch(objet.type){
            case "humain" :
                afficherHumain(objet);
                break;
            case "animal de compagnie" :
                afficherAnimal(objet);
                break;
            case "Xeno" :
                afficherXeno(objet);
                break;
            default :
                console.log("Type de Profil non Existant");
        }
    });*/

    //La Boucle Map()
    /*tabObjet.map(objet => {
        switch(objet.type){
            case "humain" :
                afficherHumain(objet);
                break;
            case "animal de compagnie" :
                afficherAnimal(objet);
                break;
            case "Xeno" :
                afficherXeno(objet);
                break;
            default :
                console.log("Type de Profil non Existant");
        }
    });*/

    //La Boucle For...Of
    for(let objet of tabObjet){
        if(objet.type == "humain"){
            afficherHumain(objet);
        }else if (objet.type == "animal de compagnie"){
            afficherAnimal(objet);
        }else if (objet.type == "Xeno"){
            afficherXeno(objet)
        }else {
            console.log("Type de Profil non Existant");
        }
    }
}

//9) Appeler la fonction profil() sur chacun des tableaux usersHuman, usersPet, usersXeno
/*profil(usersHuman);
profil(usersPet);
profil(usersXeno);*/


/*10) Créer la fonction profilAll() que prend en paramètre un grand tableaux constitué de petit tableaux qui sont constitué d'objet (voir la structure de tabData)

11) Faire en sorte que la fonction profilAll() appelle la fonction profil() sur chaque petit tableau.*/
function profilAll(tabTab){
    for(let tab of tabTab){
        profil(tab);
    }
}

//12) Appeler la fonction profilAll() sur le tableau tabData.
profilAll(tabData);