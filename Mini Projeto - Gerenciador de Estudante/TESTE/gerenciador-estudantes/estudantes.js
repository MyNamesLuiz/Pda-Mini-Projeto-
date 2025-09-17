import { validarDadosDoEstudante } from "./utils.js";
// Array para armazenar estudantes
export var estudantes = [
  { nome: "Jeferson", idade: 21, notas: [10, 9, 8] },
  { nome: "Maria", idade: 22, notas: [7, 8, 9] },
  { nome: "Carlos", idade: 20, notas: [6, 5, 7] }
];

// feat: adicionar estrutura inicial do projeto com lista de estudantes

/** Função para cadastrar um novo estudante */
export function cadastrarEstudante(nome, idade, notas) {
  const erro = validarDadosDoEstudante(nome, idade, notas);
  if (erro) {
    console.log("\n⚠️ " + erro);
    return;
  }
  estudantes.push({ nome, idade, notas });
  console.log(`✅ «${nome} cadastrado(a) com sucesso!»`);
}

/** Função para listar todos os estudantes */
export function listarEstudantes() {
  if (estudantes.length === 0) {
    console.log("📭 Nenhum estudante cadastrado.");
    return;
  }
  console.log("\n📋 Lista de Estudantes:");
  estudantes.forEach((estudante, indice) => {
    console.log(`\n${indice + 1}️⃣ ${estudante.nome} - Idade: ${estudante.idade} - Notas: ${estudante.notas.join(", ")}`);
  });
}

/** Buscar estudantes por nome (case-insensitive, parcial) */
export function buscarEstudante(nomeBusca) {
  const resultado = estudantes.filter(estudante =>
    estudante.nome.toLowerCase().includes(nomeBusca.toLowerCase())
  );

  if (resultado.length === 0) {
    console.log("🔍 Nenhum estudante encontrado.");
    return;
  }

  console.log("\n🔍 Estudantes encontrados:");
  resultado.forEach(estudante => console.log(`📌 ${estudante.nome} - Idade: ${estudante.idade} - Notas: ${estudante.notas.join(", ")}`));
}

/** Editar estudante */
export function editarEstudante(nomeBusca, novoNome, novaIdade, novasNotas) {
  const index = estudantes.findIndex(estudante => estudante.nome.toLowerCase() === nomeBusca.toLowerCase());

  if (index === -1) {
    console.log("🔍 Estudante não encontrado.");
    return;
  }

  if (novoNome) estudantes[index].nome = novoNome;
  if (novaIdade) estudantes[index].idade = novaIdade;
  if (novasNotas) estudantes[index].notas = novasNotas;

  console.log("✅ Estudante atualizado com sucesso!");
}

/** Remover estudante */
export function removerEstudante(nomeBusca) {
  const index = estudantes.findIndex(estudante => estudante.nome.toLowerCase() === nomeBusca.toLowerCase());
  if (index === -1) {
    console.log("\n🔍 Estudante não encontrado.");
    return;
  }
  const removido = estudantes.splice(index, 1)[0];
  console.log(`🗑️ Estudante ${removido.nome} removido com sucesso!`);
}
