function maiorDeIdade(idade) {
  idade = Number.parseInt(idade);
  if (Number.isNaN(idade)) {
    throw new Error(`input invalido, ${idade} não é um número`);
  }

  return idade >= 18;
}

module.exports = maiorDeIdade;
