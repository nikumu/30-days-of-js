function extrairValores(array){
    const [primeiro = null, segundo = null, terceiro = null] = array;
    return [primeiro, segundo, terceiro];
}

console.log(extrairValores([4, 8]));
console.log(extrairValores([2, 5, 7, 8, 9]));
