const pessoas = {
  idade: 20,
  nome: "Alexandre",
  altura: 1.79,
  ehProgramador: true,
};
//adicionando
pessoas.profissao = "vagabundo";

console.log(pessoas);

//deleta algum parametro
delete pessoas.altura;

console.log(pessoas);

console.clear();

// * exemplo
function funcao(array) {
  let acc = 0;

  for (let elemento of array) {
    acc += elemento;
  }

  return acc / array.length;
}

console.log(funcao([4, 6, 4, 2]));
