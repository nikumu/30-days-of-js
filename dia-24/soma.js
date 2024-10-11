function somarAteN(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
}

const numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero) || numero <= 0) {
    console.log("Insira um número válido maior que zero.");
} else {
    const resultado = somarAteN(numero);
    console.log(`A soma de todos os números de 1 a ${numero} é: ${resultado}`);
}
