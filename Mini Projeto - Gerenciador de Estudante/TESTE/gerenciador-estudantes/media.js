import { estudantes } from "./estudantes.js";
/** Calcular média de notas */
export function calcularMedia(notas) {
  return notas.reduce((acumulador, nota) => acumulador + nota, 0) / notas.length;
}

/** Mostrar médias individuais */
export function mediasIndividuais() {
  if (estudantes.length === 0) {
    console.log("📭 Nenhum estudante cadastrado.");
    return;
  }
  console.log("\n🧮 Médias Individuais:");
  estudantes.forEach(estudante => {
    console.log(`🎓 ${estudante.nome}: Média = ${calcularMedia(estudante.notas).toFixed(2)}`);
  });
}

/** Média geral da turma */
export function mediaGeral() {
  if (estudantes.length === 0) return 0;
  const somaTotal = estudantes.reduce((acumulador, estudante) => acumulador + calcularMedia(estudante.notas), 0);
  return somaTotal / estudantes.length;
}

/** Estudante com maior média */
export function estudanteMaiorMedia() {
  if (estudantes.length === 0) return null;
  return estudantes.reduce((maior, estudante) => {
    return calcularMedia(estudante.notas) > calcularMedia(maior.notas) ? estudante : maior;
  });
}

/** Relatórios de aprovação */
export function relatorios() {
  if (estudantes.length === 0) {
    console.log("📭 Nenhum estudante cadastrado.");
    return;
  }
  const aprovados = estudantes.filter(est => calcularMedia(est.notas) >= 7);
  const recuperacao = estudantes.filter(est => calcularMedia(est.notas) >= 5 && calcularMedia(est.notas) < 7);
  const reprovados = estudantes.filter(est => calcularMedia(est.notas) < 5);

  console.log("\n📊 Relatórios:");
  console.log("✅ Aprovados:", aprovados.map(est => est.nome).join(", ") || "Nenhum");
  console.log("⚠️ Recuperação:", recuperacao.map(est => est.nome).join(", ") || "Nenhum");
  console.log("❌ Reprovados:", reprovados.map(est => est.nome).join(", ") || "Nenhum");
}
