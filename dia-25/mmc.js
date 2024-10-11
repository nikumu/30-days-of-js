const numero1 = parseInt(prompt("Digite o primeiro número:"));
const numero2 = parseInt(prompt("Digite o segundo número:"));

let mmc = Math.max(numero1, numero2);

while (mmc % numero1 !== 0 || mmc % numero2 !== 0) {
    mmc++;
}

console.log(`O MMC de ${numero1} e ${numero2} é: ${mmc}`);
