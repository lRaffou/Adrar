const locs = [
    { ville: "Paris", lat: 48.8592, long: 2.3417 },
    { ville: "Toulouse", lat: 43.6043, long: 1.4437 },
    { ville: "Lyon", lat: 45.7676, long: 4.8345 },
];

//VOUS ECRIREZ VOTRE SCRIPT CI-DESSOUS

const map = L.map("map").setView([47, 2], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const aside = document.querySelector("aside");
const tabMarker = [];

async function fetchProfil() {
    const response = await fetch(
        "https://randomuser.me/api/?results=3&inc=name,dob,email,gender,picture,nat&nat=fr"
    );
    const data = await response.json();
    console.log(data.results);
    return data.results;
}
fetchProfil();

function profil(profilData) {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.src = profilData.picture.large;
    const h2 = document.createElement("h2");
    h2.innerText = `${profilData.name.first} ${profilData.name.last}`;
    const pAge = document.createElement("p");
    pAge.innerText = `${profilData.gender}, ${profilData.dob.age}`;
    const pEmail = document.createElement("p");
    pEmail.innerText = `${profilData.email}`;

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(pAge);
    article.appendChild(pEmail);
    article.classList.add("card");
    aside.appendChild(article);

    return article;
}

function displayMarker(profils) {
    locs.forEach((loc, tab) => {
        const img = document.createElement("img");
        img.src = profils[tab].picture.thumbnail;
        const marker = L.marker([loc.lat, loc.long])
            .addTo(map)
            .bindPopup(img)
            .openPopup();
        tabMarker.push(marker);
    });
}

function displayProfil(profils) {
    profils.forEach((profilData, tab) => {
        const article = profil(profilData);
        article.addEventListener("mouseenter", () => {
            article.classList.add("card--hover");
        });
        article.addEventListener("mouseleave", () => {
            article.classList.remove("card--hover");
        });
        article.addEventListener("click", () => {
            tabMarker[tab].openPopup();
        });
    });
}

async function display() {
    const profils = await fetchProfil();
    displayMarker(profils);
    displayProfil(profils);
}

display();
