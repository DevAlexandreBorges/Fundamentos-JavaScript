// map() = cria um outro array, com as mesmas caracteristicas do array original

const numeros = ["presados alunos", 20, 9, 50];

const novoArray = numeros.map((elementos) => {
  return `${elementos}(as)`;
});

console.log(novoArray);

console.clear();

// * exemplo

const valores = [30, 20, 9, 50];

const valoresDobrados = valores.map((elemento) => {
  return elemento ** 2;
});

console.log(valoresDobrados);

console.clear();

// * exemplo 2 : adicionando propriedades num objeto.

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

const valorTotal = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho,
    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
  };
});

console.log(valorTotal);

console.clear();

//* exemplo 3: adicionando IMC no array original

const pessoas = [
  {
    peso: 86,
    altura: 1.77,
  },
  {
    peso: 90,
    altura: 1.97,
  },
  {
    peso: 110,
    altura: 2.03,
  },
];

const valorImc = pessoas.map((dadosPessoais) => {
  return {
    ...dadosPessoais,
    IMC: dadosPessoais.peso / dadosPessoais.altura ** 2,
  };
});

console.log(valorImc);
