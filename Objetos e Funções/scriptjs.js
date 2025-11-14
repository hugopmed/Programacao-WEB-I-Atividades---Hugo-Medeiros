// Criando e Acessando Objetos

console.log("=========== Objetos ===========")
const livro = {
    titulo: "Título do Livro",
    autor: "Hugo",
    pagina: 200,
    disponivel: "Sim",
}

console.log(livro.titulo);
console.log(livro["autor"]);

livro.editora = "Editora Wow";
livro.detalhes = "Detalhes do livro..............................."

console.log(livro["detalhes"])

const biblioteca = {
    livros: ["Livro 1",
        "Livro 2",
        "Livro 3",
        "Livro 4",
        "Livro 5",
    ]
}

console.log(biblioteca.livros);

// Criando e Usando Funções

console.log("=========== Funções ===========")

function saudar(nome){
    console.log (`Olá, ${nome}!`);
}

saudar("Hugo");

function calcularMedia(a, b, c){
    console.log ((a + b + c)/3);
}

calcularMedia(6, 10, 9);

function apresentarProduto(nomeProduto, preco){
    console.log(`Nome do Produto: ${nomeProduto}`);
    console.log(`Preco do Produto: R$ ${preco}`);

}

apresentarProduto('Shampoo', 14.0);

console.log();