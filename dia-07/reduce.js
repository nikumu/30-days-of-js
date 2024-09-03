const people = [
    {id: 5, name: 'Jesse', age: 20, federativeUnit: 'Joinville'},
    {id: 81, name: 'Saul', age: 48, federativeUnit: 'Araquari'},
    {id: 47, name: 'Gustavo', age: 50, federativeUnit: 'Joinville'},
    {id: 87, name: 'Walter', age: 50, federativeUnit: 'Araquari'},
    {id: 9, name: 'Hank', age: 42, federativeUnit: 'Jaraguá do Sul'},
    {id: 73, name: 'Jane', age: 26, federativeUnit: 'Araquari'}
]

const federativeUnitFrequency = people.reduce((acc, person) => {
    acc[person.federativeUnit] = acc[person.federativeUnit] + 1 || 1
    return acc
}, {})

console.log(federativeUnitFrequency)
