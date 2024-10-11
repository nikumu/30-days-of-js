const objetoParaJson = obj => JSON.stringify(obj);

const objetoTeste = { nome: "Luke", idade: 25 };
console.log(objetoParaJson(objetoTeste));
