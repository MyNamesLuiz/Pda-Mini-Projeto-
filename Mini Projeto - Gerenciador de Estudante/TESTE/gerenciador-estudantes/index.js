// Carregar todos os arquivos do projeto

import readline from "readline";
import { cadastrarEstudante, listarEstudantes, buscarEstudante, editarEstudante, removerEstudante, estudantes } from "./estudantes.js";
import { calcularMedia, mediasIndividuais, mediaGeral, estudanteMaiorMedia, relatorios } from "./media.js";

// Menu interativo
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Menu principal
function menu() {
  console.log(`
======== GERENCIADOR DE ESTUDANTES 📚 ========

1️⃣ - Cadastrar Estudante
2️⃣ - Listar Estudantes
3️⃣ - Buscar Estudante
4️⃣ - Mostrar Médias Individuais
5️⃣ - Mostrar Média Geral da Turma
6️⃣ - Estudante com Maior Média
7️⃣ - Relatórios de Situação
8️⃣ - Editar Estudante
9️⃣ - Remover Estudante
0️⃣ - Sair
`);

  rl.question("Escolha uma opção: ", (op) => {
    switch (op) {
      case "1":
        rl.question("Nome: ", nome =>
          rl.question("Idade: ", idade =>
            rl.question("Notas (separadas por vírgula): ", notas => {
              cadastrarEstudante(nome, parseInt(idade), notas.split(",").map(Number))
              menu();
            })
          )
        );
        break;
      case "2":
        listarEstudantes();
        menu();
        break;
      case "3":
        rl.question("Nome para busca: ", nomeBusca => {
          buscarEstudante(nomeBusca);
          menu();
        });
        break;
      case "4":
        mediasIndividuais();
        menu();
        break;
      case "5":
        console.log(`📊 Média da turma: ${mediaGeral().toFixed(2)}`);
        menu();
        break;
      case "6":
        const melhor = estudanteMaiorMedia();
        if (melhor) {
          console.log(`🏆 Estudante com maior média: ${melhor.nome} - Média: ${calcularMedia(melhor.notas).toFixed(2)}`);
        } else {
          console.log("📭 Nenhum estudante cadastrado.");
        }
        menu();
        break;
      case "7":
        relatorios();
        menu();
        break;
      case "8":
        rl.question("Nome do estudante para editar: ", nomeBusca =>
          rl.question("Novo nome (Enter para manter): ", novoNome =>
            rl.question("Nova idade (Enter para manter): ", novaIdade =>
              rl.question("Novas notas (vírgula, Enter para manter): ", novasNotas => {
                editarEstudante(
                  nomeBusca,
                  novoNome || null,
                  novaIdade ? parseInt(novaIdade) : null,
                  novasNotas ? novasNotas.split(",").map(Number) : null
                );
                menu();
              })
            )
          )
        );
        break;
      case "9":
        listarEstudantes();
        rl.question("\nNome do estudante para remover: ", nomeBusca => {
          removerEstudante(nomeBusca);
          menu();
        });
        break;
      case "0":
        console.log("👋 Saindo... Até mais!");
        rl.close();
        break;
      default:
        console.log("❌ Opção inválida!");
        menu();
    }
  });
}

menu();
