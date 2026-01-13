/* Form variables */
const ticketForm = document.getElementById("ticket-form");
const nameInput = document.getElementById("name-input");
const kmInput = document.getElementById("km-input");
const ageInput = document.getElementById("age-input")

/* Ticket price variables */


ticketForm.addEventListener("submit", function (event) {
event.preventDefault(); 
const name = nameInput.value;
const km = parseFloat(kmInput.value);
const age = ageInput.value;
const ticketStandard = km * 0.21; 
const discountUnderAge = ticketStandard * 0.20;
const discountOverAge = ticketStandard * 0.40;
let finalTicketPrice;
console.log("Nome:", name);
console.log("Chilometri:", km);
console.log("Fascia d'età:", age);

if (age === "Minorenne") {
    finalTicketPrice = (ticketStandard - discountUnderAge).toFixed(2); 
    console.log(finalTicketPrice, "€");
} else if (age === "Over 65") {
    finalTicketPrice = (ticketStandard - discountOverAge).toFixed(2);
} else {
    finalTicketPrice = ticketStandard.toFixed(2);
}
})

