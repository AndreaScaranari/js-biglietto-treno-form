// costo al km
const kmCost = 0.21;

// - 20% per i minorenni
const underageDiscount = 0.2;
const underagePrice = 1 - underageDiscount;

// - 40% per gli over 65
const elderDiscount = 0.4;
const elderPrice = 1 - elderDiscount;

// const varie
const inputNameSurname = document.getElementById("name-surname");
const inputTrip = document.getElementById("km-trip");
const inputAge = document.getElementById("passengers-age");
const buttonConfirm = document.getElementById("confirm-button");

// *Event listener sul bottone
buttonConfirm.addEventListener("click", function () {

    // raccogliere nome e cognome
    const nameSurname = inputNameSurname.value;
    // console.log(nameSurname);
    inputNameSurname.value = "";    
    
    // raccogliere quantità chilometri da percorrere
    const kmTrip = inputTrip.value;
    // console.log(kmTrip);
    inputTrip.value = "";

    // raccogliere fascia d'età
    const passengersAge = inputAge.value;
    console.log(passengersAge);

    // definire prezzo biglietto pre-sconti
    const ticketCost = kmTrip * kmCost;
    let finalPrice = ticketCost;
    
    // definire prezzo biglietto post-sconti
    if (passengersAge == "minorenne") {
        finalPrice = ticketCost * underagePrice;

    } else if (passengersAge == "over-65") {
        finalPrice = ticketCost * elderPrice;
        console.log("Sono vecchio!");
    }

    // Stampo in console prezzo finale del biglietto post-sconti
    console.log("€ " + finalPrice.toFixed(2));
});



