function inverteVetor() {
    let numeros = prompt("Digite os números inteiros separados por vírgula:");
    
    let vetor = numeros.split(",").map(Number);
    
    console.log("Vetor original:", vetor);
    
    let vetorInvertido = vetor.reverse();
    
    console.log("Vetor invertido:", vetorInvertido);
}

inverteVetor();
