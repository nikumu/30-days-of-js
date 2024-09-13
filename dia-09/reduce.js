function mostFrequentItem(arr) {
    const frequency = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

    return Object.keys(frequency).reduce((mostFrequent, item) => 
        frequency[item] > frequency[mostFrequent] ? item : mostFrequent
    );
}

const numbers = [1, 2, 6, 2, 9, 3, 7, 2];
console.log(mostFrequentItem(numbers));
