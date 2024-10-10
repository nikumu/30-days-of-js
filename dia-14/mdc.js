function calcularMDC(a, b) {
    if(b === 0){
        return a;
    }
    return calcularMDC(b, a % b);
}

const a = 48;
const b = 56;
const resultado = calcularMDC(a, b);
console.log(`O MDC de ${a} e ${b} é ${resultado}`);
