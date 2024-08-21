const prompt = require("readline-sync");

const idade = prompt.question("Qual a sua idade: ");

console.log("O usuario tem", idade, typeof idade);

const nome = prompt.question("Qual seu nome?");
console.log("Ola," + nome);
