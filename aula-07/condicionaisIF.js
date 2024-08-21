const prompt = require("readline-sync");

// const idade = Number(prompt.question("Qual sua idade?"));

// if (idade >= 18) {
//   console.log("Voce é maior de idade!");
// } else {
//   console.log("Voce é menor de idade");
// }

// const mediaDoAluno = 10;

// if (mediaDoAluno >= 7) {
//   console.log("Aprovado");
//   console.log("parabens 👍👍");
// } else if (mediaDoAluno === 5) {
//   console.log("Voce vai para a prova final");
// } else {
//   console.log("Reprovado");
// }

const temCnh = prompt.keyInYN("voce tem cnh?");
const maiorIdade = Number(prompt.question("Voce tem quantos anos?"));

if (temCnh == true && maiorIdade >= 18) {
  console.log("voce pode dirigir!");
} else {
  console.log("voce n tem permissao para dirigir");
}
