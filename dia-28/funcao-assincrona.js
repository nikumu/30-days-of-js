async function buscarDados(entrada) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (entrada === "erro") {
        throw new Error("Entrada inválida: 'erro'");
    }

    return `Dados retornados para a entrada: ${entrada}`;
}

async function executarBusca() {
    try {
        const resultado = await buscarDados("teste"); 
        console.log(resultado);
    } catch (e) {
        console.error(e.message);
    }
}

executarBusca();
