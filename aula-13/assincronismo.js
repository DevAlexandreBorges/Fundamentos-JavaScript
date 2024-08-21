const fs = require("fs");

// * 1. callback = funçoes que levam um tempo para serem processadas costumam ser executadas depois do resto das demais funçoes, que gastam menos processamento. exemplo : ler um arquivo usando readFile() tem mais custo de processamento que um log() padrão.

// console.log("ANTES de executar a função");

// fs.readFile("aula-13/arquivo.txt", (err, conteudo) => {
//   if (err) {
//     console.log("Esse arquivo não existe", err);
//   } else {
//     console.log(String(conteudo));
//   }
// });

// console.log("DEPOIS de executar a função");

// * exemplo dois setTimeOut()  = executará a função a partir do tempo que foi determinado

// console.log("antes da função");

// setTimeout(() => {
//   console.log("Essa função será executada após 2 segundos");
// }, 2 * 1000);

// * 2. Promisse (promessa)

// console.log("ANTES de executar a promisse");

function criandoPromisse() {
  return new Promise((resolve, reject) => {
    fs.readFile("aula-13/arquivo.txt", (err, conteudo) => {
      if (err) {
        reject("Esse arquivo não existe", err);
      } else {
        resolve(String(conteudo));
      }
    });
  });
}
//* criando uma promisse

// console.log(criandoPromisse()); //! até esse momento a promisse fica como pending, pois ainda foi apenas criada e não executado seu conteudo

// //! a partir do momento que usamos o then(), buscamos o conteudo que esta dentro do resolve e printamos na tela, buscando semprem uma execução verdadeira.
// //!Usamos o catch() logo em seguida para buscarmos caso dê um erro.
// //! Usamos o finally para executar um final de bloco independente se der verdadeiro ou falso.

// criandoPromisse()
//   .then((conteudoDoRevolse) => {
//     console.log("Deu certo sua promisse", conteudoDoRevolse);
//   })
//   .catch((err) => {
//     console.log("Deu ruim!", err);
//   })
//   .finally(() => {
//     console.log(
//       "Será executado independente se for rejeitada ou resolvida a promisse"
//     );
//   });

// console.log("DEPOIS de executar");

// * 3. async/awai = tornar uma funçaõ async faz com que ela o Await e conforme a instrução tudo abaixo do await, deve ser executado depois.

// async function lerDados() {
//   console.log("Antes de ser executada");

//   const leitura = await criandoPromisse();
//   console.log(leitura);

//   console.log("Depois de ser executada!");
// }

// console.log(lerDados());

//! Observe que para ser tratado corretamente precisa de um tratametento para verificar se tem erro, dai usamos o try() e catch()

async function lerDados() {
  try {
    console.log("Antes de ser executada");

    const leitura = await criandoPromisse();
    console.log(leitura);

    console.log("Depois de ser executada!");
  } catch (err) {
    console.log("sera executado isso caso tenha erro. ");
  }
}

console.log(lerDados());
