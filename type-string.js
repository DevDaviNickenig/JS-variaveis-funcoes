// é um tipo texto. guarda tudo que nao é numero ou boleano.

const texto1 = "Olá  Mundo!"; // pode ser "" ou ''
const texto2 = 'Olá Mundo!'; // pode ser "" ou ''
const senha = "senhaSuperSegura456!";
const stringDeNumeros = "34567";

const citacao = 'Meu nome é '; // pode usar uma dentro da outra.
const meuNome = "Davi"
//console.log(citacao)

//concatenação (+)

console.log(citacao + meuNome)


// template string ou template literal 

//codificaçao de string. modelo UTF

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

const cidade = "belo horizonte";
const input = "Belo Horizonte";
const inputMinusculo = input.toLowerCase();

console.log(cidade === input); // false
console.log(cidade === inputMinusculo); // true

const senha1 = "minhaSenha123"
console.log(senha1.length) // 13 caracteres
