const personalizedMessage = ({nome, idade}) => `Olá, meu nome é ${nome} e minha idade é ${idade} anos.`;

console.log(personalizedMessage({nome: "Jesse", idade: 27}));

console.log(personalizedMessage({nome: "Lalo", idade: 44}));
