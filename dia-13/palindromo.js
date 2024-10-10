function verificarPalindromo(palavra) {
    if (palavra.length <= 1) {
        return true;
    }

    if(palavra[0] !== palavra[palavra.length -1]){
        return false;
    }

    return verificarPalindromo(palavra.slice(1, palavra.length - 1));
}

const palavra1= "teste";
console.log(verificarPalindromo(palavra1));

const palavra2= "radar";
console.log(verificarPalindromo(palavra2));
