// como o export não foi nomeado, poderíamos chamar de qualquer coisa aqui
const verificaIdade = require('./verifica-idade');
const verificaIdadeASCII = require('./verifica-idade-ascii');

// aqui o export foi nomeado, então precisamos usar destructuring com o nome certo
const { imprimeIdade } = require('./imprime-idade');

// módulo nativo do node para ler dados do terminal
// https://nodejs.org/docs/latest-v16.x/api/readline.html
const readline = require('readline');

// acessamos os argumentos da chamada do script
const args = process.argv;
const IDADE_PADRAO = 10;
const idade = args[2] ?? IDADE_PADRAO; // [nodejs, script, idade]

console.clear();
imprimeIdade(idade);
console.log(`A pessoa é maior de idade? ${verificaIdade(idade) ? 'sim' : 'não'}`);
console.log('--------\n\nTerminal interativo:\n');

// criamos uma instância do readline usando como input/output o stdin, o terminal onde vai rodar o nodejs
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual idade verificar?\n', function(idade) {
  verificaIdadeASCII(idade);

  rl.close();
});
