let numero = parseInt(prompt("Digite um número:"));

let primo = true;

for (let i = 2; i<= numero / 2; i++) {
    if(numero % i === 0) {
        primo = false;
        break;
    }
}

if(primo) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}
