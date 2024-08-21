// fetch API do browser

//usando then/catch

// fetch("https://viacep.com.br/ws/14540000/json/")
//   .then((response) => {
//     response.json().then((dados) => console.log(dados));
//     // console.log(response);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

// async/await

async function obterCep() {
  const resposta = await fetch("https://viacep.com.br/ws/14540000/json/");

  const dados = await resposta.json();

  console.log(dados);
}

obterCep();
