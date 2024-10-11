class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this._idade = idade;
    }

    get idade() {
        return this._idade;
    }

    set idade(valor) {
        if (valor < 0) {
            console.log("A idade não pode ser negativa.");
        } else {
            this._idade = valor;
        }
    }
}

const pessoa = new Pessoa("Saul", 44);
console.log(pessoa.idade); 

pessoa.idade = -4; 
console.log(pessoa.idade); 
