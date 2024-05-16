const usersHuman = [
    {
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25,
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5,
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500,
    },
];

const usersPet = [
    {
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe",
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable",
    },
];

const usersXeno = [
    {
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45,
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35,
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25,
    },
];

const tabData = [];
tabData.push(usersHuman, usersPet, usersXeno);
console.log(tabData);

function afficherHumain(profil) {
    console.log(`----------------------------------------`);
    console.log(`name : ${profil.name}
email : ${profil.email}
age : ${profil.age} ans`);
    console.log(`----------------------------------------`);
}
afficherHumain(usersHuman[2]);

function afficherAnimal(profil) {
    console.log(`----------------------------------------`);
    console.log(`name : ${profil.name}
espèce : ${profil.espece}
age : ${profil.age} ans
propriétaire : ${profil.propriétaire}`);
    console.log(`----------------------------------------`);
}
afficherAnimal(usersPet[0]);

function afficherXeno(profil) {
    console.log(`----------------------------------------`);
    console.log(`name : ${profil.name}
espèce : ${profil.espece}
age : ${profil.age} ans
niveau de menace : ${profil.menace}`);
    console.log(`----------------------------------------`);
}
afficherXeno(usersXeno[2]);
function profil(tabObjet) {
    tabObjet.forEach((profil1) => {
        profil1.forEach((profil) => {
            if (profil.type == `humain`) {
                afficherHumain(profil);
            } else if (profil == `animal de compagnie`) {
                afficherAnimal(profil);
            } else if (profil == `Xeno`) {
                afficherXeno(profil);
            } else return console.log(`Type de Profil non Existant`);
        });
    });
}

profil(usersHuman);
profil(usersPet);
profil(usersXeno);

function profilAll(leTab) {
    leTab.forEach(profil => {
        profil();
    })
}
profilAll(tabData);