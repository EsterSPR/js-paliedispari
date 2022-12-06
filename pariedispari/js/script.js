// let pari_dispari = prompt('Scrivi "pari" o "dispari"');
// console.log(pari_dispari);

// let numero_utente = parseInt(prompt('Scrivi un numero da 1 a 5'));
// console.log(numero_utente);


// let numero_pc_array = ["1", "2", "3", "4", "5"];
// const numero_pc = numero_pc_array[Math.random() * numero_pc_array.length | 0];
// console.log(numero_pc);


// const somma = numero_utente + numero_pc;
// console.log(somma);

// if (somma % 2 == 0 && pari_dispari == "pari") {
//     console.log('Il giocatore ha vinto');
// } else if (somma % 3 == 0 && pari_dispari == "dispari") {
//     console.log('Il giocatore ha vinto');
// } else {
//     console.log('Il giocatore ha perso');
// }


function numberGenerator (min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numberChecker(somma)
{
    if(somma % 2 == 0){
        return "pari"
    }

    return "dispari";
}

let pari_dispari = prompt("Scrivi pari o dispari");

while(pari_dispari !== "pari" && pari_dispari !== "dispari"){
    pari_dispari = prompt("Scrivi pari o dispari");
}

let numero_utente = parseInt(prompt("Scrivi un numero da 1 a 5"));
console.log(numero_utente);

let numero_pc = numberGenerator(1, 5);
console.log(numero_pc);


let somma = numero_utente + numero_pc;
console.log(somma);


let controllo = numberChecker(somma);

if(pari_dispari == controllo){
    alert('Hai vinto!');
} else {
    alert('Hai perso :(');
}