// ! Usando then/catch

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     response.json().then((dadosPokemon) => console.log(dadosPokemon));
//   })
//   .catch((erro) => console.log(erro));

// ! Usando async e await (de forma completa)

async function buscarPokemon() {
  try {
    const dadosEsperados = await fetch(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    );

    const dadosCapturados = await dadosEsperados.json();

    console.log(dadosCapturados);
  } catch {
    console.log("deu erro!");
  }
}

buscarPokemon();

// ! Obs: o fetch por padrão é uma requisição do tipo GET
