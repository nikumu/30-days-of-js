let frase = prompt("Digite uma frase:");

let quantidadeEspacos = 0;

for(let i = 0; i < frase.length; i++) {
    if(frase[i] === " ") {
        quantidadeEspacos++;
    }
}

console.log("A frase possui", quantidadeEspacos, "espaços em branco.");
