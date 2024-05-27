/*C'est là que vous allez mettre votre code JS*/

const info = document.createElement("div");
const cardMeteo = document.getElementsByClassName("cardMeteo");
const button = document.querySelector("button");
const newDiv = cardMeteo[0].insertBefore(info, button);

info.style.height = "300px";
info.style.width = "200px";
info.style.marginTop = "16px";
info.style.marginBottom = "16px";
info.style.border = "2px solid grey";
info.style.padding = "16px, 12px, 24px, 12px";

// cardMeteo[0].append("newDiv");