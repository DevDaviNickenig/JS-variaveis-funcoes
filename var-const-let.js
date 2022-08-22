//var - funciona em qlquer lugar do codigo. primeiro a ser carregada no codigo.

//const - é uma constante, não pode ser alterada seu valor. tem que tem um valor, não pode ser vazio.

/*var altura = 5;
var cumprimento = 7;

area = altura * cumprimento;
console.log(area);
var area;*/

/*let forma = 'retângulo';
let altura = 5;
let cumprimento = 7;
let area;

if (forma === 'retângulo') {
  area = altura * cumprimento;
} else {
  area = (altura * cumprimento) / 2;
}

console.log(area);*/

const forma = 'triângulo';
const altura = 5;
const cumprimento = 7;
let area;

if (forma === 'quadrado') {
  area = altura * cumprimento;
} else {
  area = (altura * cumprimento) / 2;
}

//const area = altura * cumprimento;
console.log(area);