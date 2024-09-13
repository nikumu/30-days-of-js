let livro = {
    titulo: 'O Anticristo',
    autor: 'Friedrich Nietzsche',
    numeroDePaginas: 125,

    descricao: function(){
        console.log(`O livro ${this.titulo}, escrito por ${this.autor}, tem ${this.numeroDePaginas} páginas`);
    }
};

livro.descricao();
