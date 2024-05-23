// Créer des éléments - Afficher un profil utilisateur
// Nous avons cet objet userData et via JS on doit l’afficher dans la page web
// Jean-François Pech 03/03/2023
// 10/03/2023
// 99
// //! EXO 20.1
// //TODO: via JS afficher le profil utilisateur dans la page web
// const userData = {
//     name: "John delavega",
//     email: "john.doe@example.com",
//     age: 25,
//     dob: "08/02/1989",
//     active: true,
//     img: " https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg ",
// };

// const card = document.createElement("article");
// const pix = document.createElement("img");
// const user = document.createElement("div");

// card.className = "laCard";
// card.style.background =
//     "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)";
// card.style.width = "600px";
// card.style.height = "800px";
// card.style.display = "flex";
// card.style.justifyContent = "center";
// card.style.paddingTop = "20px";
// document.body.append(card);

// pix.src = userData.img;
// pix.style.width = "500px";
// pix.style.height = "500px";
// document.body.append(pix);

// user.src = userData;
// user.style.background = "red"
// document.body.append(user);

// card.prepend(pix);
// card.prepend(user);

// console.log(card.childNodes);



// title.addEventListener("click", (event) => {
//     emoji.innerText = "--\ud83e\udd73--";
//     emoji.style.width = "200px";
//     emoji.style.height = "50px";
//     emoji.style.display = "flex";
//     emoji.style.justifyContent = "center";
//     emoji.style.alignItems = "center";
//     // title.style.backgroundColor = "red";
//     emoji.style.fontSize = "30px";
//     emoji.style.boxShadow = "0px 10px 30px black";
//     title.removeEventListener("click", push);
// });

// document.body.append(emoji);

const title = document.querySelector("h1");

title.addEventListener("click",function(){
    titre.innerText = "---- 🥳 ----";
})


const ajouter = document.getElementsByTagName("a")[0];
const supprimer = document.getElementsByTagName("a")[1];
const toggle = document.getElementsByTagName("a")[2];
const titre = document.querySelector("h1");


ajouter.addEventListener("click",function(event){
    // event.preventDefault();
    titre.classList.add("color");
})

supprimer.addEventListener("click",function(event){
    // event.preventDefault();
    titre.classList.remove("color");
})

toggle.addEventListener("click",function(event){
    event.preventDefault();
    titre.classList.toggle("color");
})

const xy = document.querySelector("body");


