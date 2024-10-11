function calcularFatorial(numero) {
    if (numero < 0) {
        return "O fatorial não está definido para números negativos.";
    } else if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

const numeroEntrada = 7;
const resultado = calcularFatorial(numeroEntrada);

console.log(`O fatorial de ${numeroEntrada} é ${resultado}`);
