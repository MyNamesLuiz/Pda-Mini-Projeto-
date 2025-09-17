
//Função para válidade as informações.
export function validarDadosDoEstudante(nome, idade, notas) {
  if (Number(nome) || typeof nome !== "string") {
    return "❌ Nome inválido!"
  }
  if (!Number.isInteger(idade) || idade <= 0) {
    return "❌ Idade inválida!";
  }
  if (notas.length !== 3) {
    return "❌ Digite apenas três notas.";
  }
  if (!Array.isArray(notas) || notas.some(n => n < 0 || n > 10)) {
    return "❌ Notas inválidas! Devem estar entre 0 e 10.";
  }
}
