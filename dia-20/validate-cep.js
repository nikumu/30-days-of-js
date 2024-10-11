function validateCEP(cep){
    const cepRegex = /^\d{5}-?\d{3}$/;
    return cepRegex.test(cep);
}

console.log(validateCEP(12345678));
console.log(validateCEP(24568900));
console.log(validateCEP(1234));
