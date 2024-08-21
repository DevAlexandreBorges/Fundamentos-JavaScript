const permissao = "gerente"; // aluno || professor || gerente

switch (permissao) {
  case "aluno":
    console.log("voce pode assistir suas aulas");
    break;
  case "professor":
    console.log("voce vera suas aulas que serao ministradas");
    break;
  case "gerente":
    console.log("voce pode alterar tudo!!");
}
