/* //chiediamo all'utente la sua età
const userAge = prompt("Quanti anni hai?");
const currentYear = 2021;
const yearOfBirth = currentYear - userAge

//gli diciamo la sua data di nascita

console.log("Sei nato nel" + yearOfBirth);
document.getElementById("data_di_nascita").innerHTML = yearOfBirth;

 */



// Chiedi il nome all'utente

const user_name promt("Come ti chiami?");
console.log("Ciao, ti chiami" + user_name);


// Saluta con un messaggio a schermo (mostra in pagina)

document.getElementById("saluto").innerHTML = "Ciao" + user_name