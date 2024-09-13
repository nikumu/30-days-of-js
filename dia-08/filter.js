function arrayDiff(a,b) {
    const filtered = a.filter(number => !b.includes(number))
  
    return filtered
}

console.log(arrayDiff([1,2,2],[1]))
