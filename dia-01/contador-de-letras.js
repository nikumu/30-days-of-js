const letrasContador = (letra, texto) => {
    let cont = 0;
    for(let i in texto){
        if(letra == texto[i]) {
            cont++
        }
    }
    console.log("A letra '" + letra + "' aparece um total de " + cont + (cont === 1 ? " vez" : " vezes"))
}

letrasContador("o", "Saul Goodman")
