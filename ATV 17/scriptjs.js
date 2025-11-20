//Atividade 01 - Métodos de Arrays

const listaCompras = ["Arroz", "Maçã", "Feijão", "Sabão em Pó", "Óleo"];
listaCompras.push("Banana");
listaCompras.shift(1);

console.log(listaCompras);

const lista5Caracteres = listaCompras.filter(listaCompras => listaCompras.length >= 5);

console.log(lista5Caracteres);

//Atividade 02 - Métodos de Strings

const frase = " JavaScript é uma linguagem poderosa! ";

const fraseSemEspaço = frase.slice(1, -1);
const arrayPalavras = fraseSemEspaço.split(' ')

console.log(arrayPalavras);