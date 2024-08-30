function contadorDeVogais(str) {
    const vogais = ["a", "e","i","o","u"]
    let contador = 0

    for(var caractere = 0; caractere < str.length; caractere++){
      for(var vogal = 0; vogal < vogais.length; vogal++){
        if(str[caractere] === vogais[vogal]){
            contador++
        }
    }
}
    return contador
}

const resultado = contadorDeVogais("Say my name")
console.log(resultado)
