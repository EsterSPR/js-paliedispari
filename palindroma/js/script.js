let parola = prompt('Inserisci una parola');

const risposta = palindromoFunction(parola);

console.log(risposta);

//FUNZIONI

function palindromoFunction(string) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'Non è un palindromo';
        }
    }
    return 'È un palindromo';
}