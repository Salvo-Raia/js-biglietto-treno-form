/* Form variables */
const ticketForm = document.getElementById("ticket-form");
const nameInput = document.getElementById("name-input");
const kmInput = document.getElementById("km-input");
const ageInput = document.getElementById("age-input")

/* Final Ticket variables */
const ticketOutput = document.getElementById("ticket-price");
const passenger = document.getElementById("passenger-name"); 
const plan = document.getElementById("plan");
const price = document.getElementById("price");

ticketForm.addEventListener("submit", function (event) {
event.preventDefault(); 
// Salvo gli input dell'utente // 
const name = nameInput.value;
const km = kmInput.valueAsNumber;
const age = ageInput.value;
// Tariffe // 
const ticketStandard = km * 0.21; 
const discountUnderAge = ticketStandard * 0.20;
const discountOverAge = ticketStandard * 0.40;
let finalTicketPrice;
// Stampo gli input dell'utente //
console.log("Dati form raccolti");
console.log("Nome:", name);
console.log("Chilometri:", km);
console.log("Fascia d'età:", age);
// Svuoto i campi del form // 
nameInput.value="";
kmInput.value="";
ageInput.value="";

ticketOutput.classList.remove("d-none")

if (age === "Minorenne") {
    finalTicketPrice = (ticketStandard - discountUnderAge).toFixed(2); 
    passenger.innerText = name;
    plan.innerText = "Sconto minorenni"
    price.innerText = `${finalTicketPrice} €`
} else if (age === "Over 65") {
    finalTicketPrice = (ticketStandard - discountOverAge).toFixed(2);
    passenger.innerText = name;
    plan.innerText = "Sconto anziani"
    price.innerText = `${finalTicketPrice} €`
} else {
    finalTicketPrice = ticketStandard.toFixed(2);
    passenger.innerText = name;
    plan.innerText = "Tariffa standard"
    price.innerText = `${finalTicketPrice} €`
}
})

