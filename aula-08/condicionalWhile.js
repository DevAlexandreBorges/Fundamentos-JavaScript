const prompt = require("readline-sync");

// let saldo = Number(prompt.question("Digite seu saldo bancario: "));

// while (saldo < 0) {
//   saldo = Number(
//     prompt.question("Valor invalido! Digite seu saldo bancario: ")
//   );
// }

// if (saldo >= 20) {
//   console.log("Voce tem um saldo muito bom, e eh de: ", saldo);
// } else {
//   console.log("seu saldo é pessimo");
// }

// * exemplo 2

// let notaDoAluno = Number(prompt.question("Digite sua nota: "));

// let somaDasNotas = 0;
// let qtdNotasDigitadas = 0;

// while (notaDoAluno >= 0) {
//   somaDasNotas = somaDasNotas + notaDoAluno;
//   qtdNotasDigitadas++;
//   notaDoAluno = Number(prompt.question("Digite a proxima nota: "));
// }

// console.log(somaDasNotas);
// console.log("Sua media é: ", somaDasNotas / qtdNotasDigitadas);

// * exemplo 3
const numSortiado = parseInt(Math.random() * 10);

console.log(numSortiado);

let numDigtado = Number(prompt.question("Tente acertar o numero: "));

let tentativas = 0;
while (numDigtado !== numSortiado) {
  tentativas++;
  numDigtado = Number(
    prompt.question("Voce nao acertou, por favor digite o numero correto: ")
  );
}

console.log("voce acertou!!");
console.log("voce acertou em", tentativas, "tentativas");
