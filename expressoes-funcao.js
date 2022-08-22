//declaracao de funcao

// function minhaFuncao(param) {

// }

// minhaFuncao("param")

//expressao de funcao, são anonimas.

// const soma = function (num1, num2) { return num1 + num2 }
// console.log(soma(1, 1))

//diferença principal
console.log(apresentar()) //aqui o console funciona em cima da funcao
function apresentar() {
  return "olá"
}

console.log(soma(1, 1))
const soma = function (num1, num2) { return num1 + num2 } // se a funca for declarada autonoma, o js irá puxalas todas pra cima, diferente da var, const e let.

