//parametros de função.


// console.log(soma(2, 2))
// console.log(soma(245, 20))
// console.log(soma(-500, 60))

//parâmetros x argumentos.

//ordem dos parâmetros.'

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade}`
}

//console.log(nomeIdade(40, "davi")) // os valores tem que estar no lugar certo.

function soma(num1, num2) {
  return num1 + num2;
}

function multiplica(num1 = 1, num2 = 1) { //o 1 só é valido na execuçao desta função.
  return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3))) //54
console.log(multiplica(soma(4, 5))) //9