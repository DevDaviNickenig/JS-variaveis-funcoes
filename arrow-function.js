// =>
//normal
function apresentar(nome) {
  return `meu nome ${nome}`;
}


//arrow function - nao pode ser nomeada, sempre tem const e o nome da variável.
const apresentaArrow = nome => `meu nome ${nome}`;

const soma = (num1, num2) => num1 + num2;

//arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    reutrn`somente numeros de 1 a 9`
  } else {
    return num1 + num2;
  }
}
