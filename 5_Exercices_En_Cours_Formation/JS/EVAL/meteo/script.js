/*C'est là que vous allez mettre votre code JS*/

const info = document.createElement("div");
const cardMeteo = document.getElementsByClassName("cardMeteo");
const button = document.querySelector("button");
const newDiv = cardMeteo[0].insertBefore(info, button);
const ico = document.createElement("img");

info.style.height = "300px";
info.style.width = "215px";
info.style.marginTop = "16px";
info.style.marginBottom = "16px";
info.style.border = "3px solid grey";
info.style.padding = "16px, 12px, 24px, 12px";

function addInfo(text) {
    info.innerText = text;
}
function bouton() {
    button.classList.add("button__cardMeteo");
}
// bouton();
document.addEventListener("mousedown", () => {
    button.style.backgroundColor = "orange";
});
button.addEventListener("mouseup", () => {
    button.style.backgroundColor = "forestgreen";
});

async function infoMeteo() {
    const reponse = await fetch(
        "https://prevision-meteo.ch/services/json/toulouse"
    );
    const data = await reponse.json();
    console.log(data);
    addInfo(
        `Condition Actuelle : ` +
            data.current_condition.condition +
            `\n
    Temperature actuelle : ` +
            data.current_condition.tmp +
            `\n
    Température maximum : ${data.fcst_day_0.tmax}\n
    Température minimun : ${data.fcst_day_0.tmin}`
    );
    ico.src = data.current_condition.icon;
    cardMeteo[0].insertBefore(ico, info);
    bouton();
}
button.addEventListener("click", infoMeteo);
// console.log(data);

/*C'est là que vous allez mettre votre code JS*/

const info2 = document.createElement("div");
// const cardMeteo2 = document.getElementsByClassName("cardMeteo2");
const cardMeteo2 = document.querySelectorAll("div");
// const button2 = document.getElementsByClassName("button2");
const buttonAll = document.querySelectorAll("button");
const button2 = document.querySelector("button");
const newDiv2 = cardMeteo2[2].insertBefore(info2, buttonAll[1]);

const ico2 = document.createElement("img");

console.log(cardMeteo2);
console.log(buttonAll);
console.log(button2);
console.log(newDiv2);

info2.style.height = "300px";
info2.style.width = "200px";
info2.style.marginTop = "16px";
info2.style.marginBottom = "16px";
info2.style.border = "2px solid grey";
info2.style.padding = "16px, 12px, 24px, 12px";

function addInfo2(text) {
    info2.innerText = text;
}
// function bouton2() {
//     buttonAll[1].classList.add("button__cardMeteo2");
// }
// bouton();
buttonAll[1].addEventListener("mousedown", () => {
    buttonAll[1].style.backgroundColor = "orange";
});
buttonAll[1].addEventListener("mouseup", () => {
    buttonAll[1].style.backgroundColor = "forestgreen";
});

async function infoMeteo2() {
    const reponse2 = await fetch(
        "https://prevision-meteo.ch/services/json/toulouse"
    );
    const data2 = await reponse2.json();
    console.log(data2);
    addInfo2(`Ville : \n${data2.city_info.name}\n
    Temperature actuelle : ${data2.current_condition.tmp}\n
    Nous somme le : ${data2.current_condition.date}\n
    Dernière heure actualisée : \n${data2.current_condition.hour}`);
    ico2.src = data2.current_condition.icon_big;
    cardMeteo2[2].insertBefore(ico2, info2);
}
buttonAll[1].addEventListener("click", infoMeteo2);
// console.log(data);
