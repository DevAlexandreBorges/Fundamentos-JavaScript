// reduce() = transforma o array original em outra forma, conforme o método passado
//             pode se reduzir o arry(se usado da forma para qual foi criado)
//             é adicionado um outro parametro dentro dessa função(acc)

const numeros = [1, 2, 3, 4, 5];

const somaDoArray = numeros.reduce((acc, elemento) => {
  return elemento + acc;
});

console.log(somaDoArray);

console.clear();

// * exemplo 1 : somar apenas pares

const numPares = numeros.reduce((acc, elemento) => {
  if (elemento % 2 === 0) {
    return elemento + acc;
  } else {
    return acc;
  }
}, 0);

console.log(numPares);

console.clear();

// * exemplo 2 : soma total de todos os produtos

const carrinho = [
  {
    produto: "Feijao",
    preco: 7.98,
    quantidade: 3,
  },
  {
    produto: "Leite",
    preco: 4.98,
    quantidade: 5,
  },
  {
    produto: "Arroz",
    preco: 6.99,
    quantidade: 2,
  },
];

const total = carrinho.reduce((acc, elemento, _, arrayCompleto) => {
  return elemento.preco * elemento.quantidade + acc;
}, 0);

console.log(total);
