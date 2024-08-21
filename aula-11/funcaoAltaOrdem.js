//* função que retorna outra função

function welcome(courseName) {
  return (studentName) => {
    console.log(
      `Ola, ${studentName}! Seja bem vindo ao curso de ${courseName}`
    );
  };
}

const displayWelcome = welcome("Front-end em React");

displayWelcome("Alexandre");

console.clear();

//* funçaõ que recebe outra função

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const calcular = (num1, num2, funcaoDeOperaçao) => funcaoDeOperaçao(num1, num2);

const retorno = calcular(5, 2, multiplicar);
console.log(retorno);
console.clear();

//* outro exemplo

const resultado = calcular(
  10,
  5,
  (num1, num2) => num1 * num2 + 2 * num1 * num2
);

console.log(resultado);
