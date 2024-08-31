const someNumbers = [2, 8, 23, 42, 17, 22, 11, 7, 31, 11, 2, 42]

function noRepArray(arr) {
    let goodOnes = []
    let trash = []

    for(let num of arr) {
        if(!goodOnes.includes(num)){
            goodOnes.push(num)
        } else {
            trash.push(num)
        }
    }
    console.log(goodOnes)
    let ordered = goodOnes.sort((a, b) => a > b ? 1 : -1)
    console.log(ordered)
}

noRepArray(someNumbers)
