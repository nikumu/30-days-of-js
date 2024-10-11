Implemente uma classe `Pessoa` que armazene a `idade`, assegurando que o valor não seja negativo.

>Encapsulamento é um princípio da **Orientação a Objetos** que limita o acesso externo ao funcionamento interno de um objeto. As interações com o objeto ocorrem por meio de entradas e saídas controladas,
>sem que seu comportamento interno interfira diretamente em outros objetos, já que as relações entre eles são feitas por referências.

**Teste**
```~~~javascript
const pessoa = new Pessoa("Saul", 44);
console.log(pessoa.idade); 

pessoa.idade = -4; 
console.log(pessoa.idade); 
```
Saída:

```~~~javascript
 A idade não pode ser negativa.
```

