const prompt = require("readline-sync");

// function saudacao() {
//   nome = prompt.question("Qual seu nome: ");
//   return `Seja bem vindo ${nome}!`;
// }

// const temCadastro = prompt.keyInYN("Voce possui cadastro?");

// if (temCadastro === true) {
//   saudacao();
// } else {
//   console.log("Faça o cadastro antes de logar!!");
// }

// * exemplo basico

// function somar(num1, num2) {
//   return num1 + num2;
// }

// const resultado = somar(23, 50);

// console.log(resultado);

// * funçao anonima

// const dobroDoNumero = function (numero) {
//   return numero * 5;
// };

// const dobro = dobroDoNumero(2);
// console.log(dobro);

// * arrow functions
const subtrair = (num1) => {
  return num1 - 2;
};

const resultado = subtrair(10);
console.log(resultado);
console.clear();
//! omitindo o return, não utilizando {}

const multiplicar = (num1, num2) => num1 * num2;

const resultado1 = multiplicar(5, 2);
console.log(resultado1);
