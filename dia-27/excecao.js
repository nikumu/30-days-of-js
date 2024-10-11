class Conta {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }

    sacar(valor) {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente.");
        }
        this.saldo -= valor;
        return this.saldo;
    }

    consultarSaldo() {
        return this.saldo;
    }
}

try {
    const minhaConta = new Conta(100); 
    console.log(minhaConta.sacar(50)); 
    console.log(minhaConta.sacar(60));  
} catch (error) {
    console.error(error.message);
}
