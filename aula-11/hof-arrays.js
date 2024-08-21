// * funções de alta rdem de arrays

//forEach() = passar por todos os elementos de um array sem precisar usar um for-of
const numeros = [30, 20, 9, 50];

numeros.forEach((elemento, index, arrayCompleto) => {
  console.log(index, elemento, arrayCompleto);
});

console.clear();

// ! MUITO FODA

// find() = busca um array especifico enquanto existir

const encontrado = numeros.find((elemento, index, objetoDoArray) => {
  return elemento === 10;
});
console.log(encontrado);

console.clear();

const pesosas = [
  {
    nome: "Pessoa 1",
    idade: 20,
  },
  {
    nome: "Pessoa 2",
    idade: 40,
  },
  {
    nome: "Pessoa 3",
    idade: 15,
  },
];

const pessoaEncontrada = pesosas.find(
  (pessoa) => pessoa.idade > 10 && pessoa.idade < 40
);
console.log(pessoaEncontrada);

console.clear();

// every()  = busca por verdadeiro / false conforme solicitado na função (elemento >0)

const elementoPositivo = numeros.every((elemento) => elemento < 0);
console.log(elementoPositivo);

console.clear();
//some()  = busca se algum, não todos condizem com a função solicitada, parcialmente parecido com every()

const algumElemento = numeros.some((elemento) => elemento < 10);
console.log(algumElemento);
