//funções podem ser retutilizadas, são declaradas e depois executadas quando quisermos no codigo.

// let x = "";
// console.log(x)
// x = "Oi"

//DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
function imprimeTexto(texto) {
  console.log(texto); //texto é uma string.
}

// 2) executa a função (1 ou + vezes)

imprimeTexto(soma()); //funçao dentro de uma funçao.
imprimeTexto("outro texto");

// três formas de escrever funções.

function soma() {
  return 2 + 2; //fornece o valor para quando for ser usada, sempre ultima linha do bloco.
}

//console.log(soma()) 
soma() //nao faz nada.