const livros = require("./listaLivros");

let cheap = 0;

for (let atual =0 ; atual < livros.length ; atual++){
    if (livros[atual].preco< livros[cheap].preco){
        cheap = atual;
    }
}
console.log(`O livro mais barato é ${livros[cheap].titulo} custa ${livros[cheap].preco} R$`)