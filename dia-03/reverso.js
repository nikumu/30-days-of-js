function reverso(arr) {
    const reversoArray = []

    for(let i = 0; i < arr.length; i++) [
        reversoArray[i] = arr[arr.length - 1 - i]
    ]
    return reversoArray
}

console.log(reverso(["Jesse", "Hector", "Gus", "Tuco", "Saul"]))
console.log(reverso([2, 3, 5, 7, 8, 11, 14]))
