//resumo

Math.round // irá arredondar o numero dentro da string.

toFixed(2) // arredonda o numero para apenas 2 casas decimais. arredonda para cima.

toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) // converte um número para uma string. styles = decimal / currency / percent.

Math.ceil() //que retorna o maior número inteiro que é maior que o número passado, por exemplo Math.ceil(11.123), o valor fica 12.

Math.floor() //que retorna o menor número inteiro que é menor que o número passado, por exemplo Math.floor(11.789), o valor fica 11.






//Precisei entender as diferentes formas de arredondar e formatar números no JavaScript, prestei serviço a uma empresa que gostaria de saber quanto está pagando por hora de salário. Para isso, existe uma função que pega o salário do mês e calcula o custo hora:
const salario = 3000
const horasTrabalhadasNoMes = 176
function ganhoPorHora(salario, horasTrabalhadasNoMes) {

  const salarioHora = (salario / horasTrabalhadasNoMes);

  return salarioHora;

}

ganhoPorHora(3000, 176);

//O valor por hora do salário seria: 17.045454545454547. Mas, como estamos falando de um valor monetário, esse número deveria ter apenas duas casas decimais. Isto é, o que queremos é arredondar esse resultado para reduzir as casas decimais.

//Como estamos utilizando o JavaScript, já existe um método da classe Math que arredonda os números, a Math.round().

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

  const salarioHora = (salario / horasTrabalhadasNoMes);

  return Math.round(salarioHora);

}

//Resultado da função, agora utilizando Math.round()

//O valor da resposta foi 17, já resolvemos o problema das várias casas decimais , mas ainda não está muito preciso. Isso ocorre porque o método Math.round() retorna o valor de um número arredondado para o inteiro mais próximo.

//Formatando o resultado com ajuda do método toFixed() Como estamos trabalhando com dinheiro é importante saber também os centavos, com o auxílio do método .toFixed() eu consigo controlar o número de casas decimais após a vírgula, de forma mais simples, indicando o número de casas que eu quero como parâmetro.

//Como queremos deixar a resposta com duas casas decimais após a vírgula utilizamostoFixed(2), um ponto importante de se observar é que o método .toFixed() arredonda o número para cima, isto é, se temos, por exemplo 11.123, o valor fica 11.12, já se temos 20.555, o valor fica 20.56. Outro ponto importante de se observar é que seu retorno será uma string representando o número.

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

  const salarioHora = (salario / horasTrabalhadasNoMes);

  const total = salarioHora.toFixed(2);

  return total;

};

//Agora que deixamos o resultado da função com duas casas decimais, que tal deixar o resultado formatado na nossa moeda, o real ?

//Formatando o resultado para Real No JavaScript temos um método chamado toLocaleString() que converte um número para uma string, já tratando a questão do arredondamento e convertendo para a moeda do país que queremos, no nosso caso, o real, tornando a tarefa do programador muito mais simples.

//O método toLocaleString() recebe alguns argumento - um objeto literal com as propriedades -, no meu caso eu utilizei:

//style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:

//decimal para representar números simples.

//currency que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.

//percent para formato percentual.

//currency: A moeda para usar na formatação monetária


function ganhoPorHora(salario, horasTrabalhadasNoMes) {

  const salarioHora = (salario / horasTrabalhadasNoMes);

  const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return formatado;

}

//Utilizando a formatação do toLocaleString o resultado ficaria assim:

ganhoPorHora(3000, 176); //'R$ 17,05'

//Para saber mais No JavaScript temos outros métodos que podem ser utilizadas para o arredondamento como:

//Math.ceil() que retorna o maior número inteiro que é maior que o número passado, por exemplo Math.ceil(11.123), o valor fica 12

//Math.floor() que retorna o menor número inteiro que é menor que o número passado, por exemplo Math.floor(11.789), o valor fica 11