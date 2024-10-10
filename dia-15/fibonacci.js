let number = parseInt(prompt("Digite um número:"));

let sequence = [0, 1];

while (sequence[sequence.length - 1] <= number) {
    let nextNumber = sequence[sequence.length -1] + sequence[sequence.length -2];
    sequence.push(nextNumber);
}

console.log("Sequência de Fibonacci até", number + ":");

for (let i = 0; i < sequence.length-1; i++) {
    console.log(sequence[i]);
}
