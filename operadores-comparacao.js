
const numero = 5;
const texto = "5";

// == (comparaçao implícita) compara só valor, não deve mais ser usado.
//console.log(numero == texto) //true

// ==== (comparaçao explícita) compara valor e tipo de dado
//console.log(numero === texto) // false
//deve utilizar para converter Number() e String().

//typeof
console.log(typeof numero)
console.log(typeof texto)

// ||: Operador “ou”, retorna true caso uma condição seja válida;
// &&: Operador “e”, retorna true somente se todas as condições forem válidas;
// != e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.