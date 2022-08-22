//string modelo.

//${} permite a inserção de valores de variáveis dentro de uma string de texto.

const nome = "Davi"
const idade = 2022 - 1989
const cidadeNascimento = "Arapongas"

// const apresentacao = "Meu nome é " + nome + ", minha idade " + idade + " e nasci na cidade de " + cidadeNascimento;

const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeNascimento}`;




console.log(apresentacao);