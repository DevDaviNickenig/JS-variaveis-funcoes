//objeto
// const Livro = {
//   nome: "React Native",
//   editora: "Casa do Código",
//   paginas: 185,
//   anunciar: function () {
//     console.log("A Alura indica o livro" + this.nome + "!")
//   }
// }
//Livro.anunciar()

// const Livro = function (nome, editora, paginas) {
//   gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas

//   this.getNome = function () {
//     return gNome;
//   }
//   this.getEditora = function () {
//     return gEditora;
//   }
//   this.getPaginas = function () {
//     return gPaginas;
//   }
// }
// const GraphQL = new Livro("GraphQL", "Casa do Código", 143);
// console.log(GraphQL.getNome());
// console.log(GraphQL.getEditora());
// console.log(GraphQL.getPaginas());
//classes não vão pro topo do codigo, precisa declarar primeiro.
class Livro {
  constructor(nome, editora, paginas) {
    this.nome = nome
    this.editora = editora
    this.paginas = paginas
  }
  anunciarTitulo() {
    console.log(`Título: ${this.nome}`)
  }
  descreverTitulo() {
    console.log(`${this.nome} é um Livro da Editora ${this.editora} e tem ${this.paginas} páginas`)
  }
}

// const NodeJS = new Livro("Primeiros passos com NodeJS", "Casa do Código", 195)
// NodeJS.anunciarTitulo()
// NodeJS.descreverTitulo()

// console.log(typeof Livro)

class LivroColecao extends Livro {
  constructor(nome, nomeColecao) {
    super(nome)
    this.nomeColecao = nomeColecao
  }

  descreverColecao() {
    console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
  }
}

const logicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a Programar")
logicaDeProgramacao.descreverColecao()



// const nome = "Alura"
// const temp = new String(nome)
// console.log(temp.toString());

