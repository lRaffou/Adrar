const cardName = [
    "Thor, le porteur de Mjolnir",
    "Odin, le père de tous",
    "Loki, le menteur et le tricheur",
    "Balder, l'étincellant",
    "Heimdall, le gardien du Bifrost",
    "Jupiter, le seigneur des Dieux",
    "Mars, le massacreur",
    "Mercure, le messager ailé",
    "Neptune, le tumulteux",
    "Pluton, le faucheur",
    "Horus, l'oeil vigilant",
    "Amon-Ra, le haut régnant",
    "Set, le gardien des secrets",
    "Bast, la protectrice du foyer",
    "Anubis, le passeur et grand juge",
];

const cardType = ["Ciel", "Mer", "Feu", "Mort", "Pouvoir", "Savoir", "Gardien"];

/*
METTEZ VOTRE SCRIPT EN DESSOUS
*/

function randomX(number) {
    let nb = Math.random() * number;
    let nbAlt = Math.floor(nb);
    return nbAlt;
}
console.log(randomX(30));

class Card {
    constructor(name, power, thoughness, type, strength) {
        this.name = name;
        this.power = power;
        this.thoughness = thoughness;
        this.type = type;
        this.strength = strength;
    }
    showCard() {
        console.log(
            `------------------------------------------------\n    Nom : ${this.name}\n    Puissance : ${this.power}\n    Endurance : ${this.thoughness}\n    Type : ${this.type}\n    Fort contre : ${this.strength}\n------------------------------------------------`
        );
    }
    attack(card) {
        let dammage;
        let attackPower = this.power + randomX(6);
        if (this.strength == card.type) {
            attackPower * 1.5;
            console.log(
                `La carte ${this.name} a l'avantage contre la carte ${card.name}`
            );
        }
    }
}
