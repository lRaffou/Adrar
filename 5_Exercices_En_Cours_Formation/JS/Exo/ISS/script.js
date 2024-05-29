var map = L.map("map").setView([43.55207627792975, 1.4883414306832576], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([43.55207627792975, 1.4883414306832576])
    .addTo(map)
    .bindPopup("PopUp ou Pas PopUP")
    .openPopup();

let apiISS = "http://api.open-notify.org/iss-now.json";

async function iss() {
    // const response = await fetch(apiISS);
    // const data = await response.json();
    // console.log(data);

    // let move = L.marker([
    //     data.iss_position.latitude,
    //     data.iss_position.longitude,
    // ]).addTo(map);

    setInterval(async () => {
        const response = await fetch(apiISS);
        const data = await response.json();
        // console.log(data)
        L.marker([
            data.iss_position.latitude,
            data.iss_position.longitude,
        ]).addTo(map);
    }, 1000);
}
iss();
