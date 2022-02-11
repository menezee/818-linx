const { maiorDeIdade, imprimeIdade } = require('./verificador-de-idade');

const args = process.argv;
const idade = args[2];
// [node, script, 50]

imprimeIdade(idade);
console.log(maiorDeIdade(idade));
