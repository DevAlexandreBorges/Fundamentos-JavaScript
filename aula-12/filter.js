//filter () = filtra um array de acordo com a funçaõ estabelecida

const valores = [30, 20, 9, 50, 99, 45, 70, 22];

const valoresPares = valores.filter((valor, i) => valor % 2 === 1);

//* buscando no array original mumeros pares

console.log(valoresPares);

console.clear();

// * Exemplo 1  : Buscar alunos que tenham média superior a 85

const alunos = [
  {
    nome: "Quincy",
    media: 96,
  },
  {
    nome: "Jason",
    media: 84,
  },
  {
    nome: "Alexis",
    media: 100,
  },
  {
    nome: "Sam",
    media: 65,
  },
  {
    nome: "Katie",
    media: 90,
  },
];

const mediaDosALunosBons = alunos.filter((mediaSuperior) => {
  return mediaSuperior.media >= 85;
});

console.log(mediaDosALunosBons);

console.clear();

//* Exemplo 2 : filtar produtos que custam menos de 10,00 e não sao bebidas

const produtos = [
  {
    nome: "Suco de laranja ",
    preco: 7.5,
    tipo: "Bebida",
  },
  {
    nome: "Batata frita",
    preco: 10.5,
    tipo: "Comida",
  },
  {
    nome: "Pizza",
    preco: 12.49,
    tipo: "Comida",
  },
  {
    nome: "Chocolate",
    preco: 1.5,
    tipo: "Comida",
  },
  {
    nome: "Pastel",
    preco: 4.5,
    tipo: "Comida",
  },
  {
    nome: "Coca",
    preco: 6.99,
    tipo: "Bebida",
  },
];

const produtosFiltrados = produtos.filter((valorExato) => {
  return valorExato.preco < 10 && valorExato.tipo !== "Bebida";
});

console.log(produtosFiltrados);
