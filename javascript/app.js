const age = parseInt(prompt("Inserisci la tua età"));   //number-Nan
console.log(`La tua età è: ${age} anni`);
const kmPercorsi = parseInt(prompt("Quanti kilometri devi percorerre?")); //number-Nan
console.log(`Dovrai percorerre ${kmPercorsi}Km`);
const prezzoKm = 0.21;

const prezzoComp = kmPercorsi * prezzoKm;          //prezzo base del biglietto
let sconto = 0;


if (age < 18) {                         // sconto minori
    sconto = prezzoComp * 20 / 100;
    const finalPrice = prezzoComp - sconto;
    console.log(`Il tuo biglietto costerà ${finalPrice.toFixed(2)}€`);
}
else if (age > 65) {                // sconto over 65
    sconto = prezzoComp * 40 / 100;
    const finalPrice = prezzoComp - sconto;
    console.log(`Il tuo biglietto costerà ${finalPrice.toFixed(2)}€`);
}
else {
    const finalPrice = prezzoComp - sconto;
    console.log(`Il tuo biglietto costerà ${finalPrice.toFixed(2)}€`);
}