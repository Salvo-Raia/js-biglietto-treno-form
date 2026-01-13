/* Form variables */
const ticketForm = document.getElementById("ticket-form");
const nameInput = document.getElementById("name-input");
const kmInput = document.getElementById("km-input");
const ageInput = document.getElementById("age-input")

const name = nameInput.value;
const km = kmInput.value;
const age = ageInput.value;


ticketForm.addEventListener("submit", function (event) {
event.preventDefault(); 
const name = nameInput.value;
const km = kmInput.value;
const age = ageInput.value;
console.log(name);
console.log(km);
console.log(age);
})





/* Ticket price variables */
// const ticketStandard = km * 0.21; 
//const discountUnderAge = ticketStandard * 0.20;
// const discountOverAge = ticketStandard * 0.40;
// let finalTicketPrice;
