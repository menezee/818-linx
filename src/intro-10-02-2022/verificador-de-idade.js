function maiorDeIdade(idade) {
  idade = Number.parseInt(idade); // NaN
  if (Number.isNaN(idade)) {
    throw new Error('input invalido');
  }

  return idade >= 18;
}

function imprimeIdade(idade) {
  console.log(`A idade é ${idade}`);
}

module.exports = {
  maiorDeIdade,
  imprimeIdade,
};
