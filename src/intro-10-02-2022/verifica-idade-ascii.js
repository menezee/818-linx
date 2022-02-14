// https://www.npmjs.com/package/figlet
const figlet = require('figlet');
const FONTE_PADRAO = 'doom';

function verificaIdadeASCII(idade) {
  idade = Number.parseInt(idade);
  let resultado = null;

  if (Number.isNaN(idade)) {
    resultado = `Erro`;
  } else if (idade >= 18) {
    resultado = 'Maior de idade';
  } else {
    resultado = 'Menor de idade';
  }

  figlet(resultado, function(err, data) {
    console.log(data)
  });
}

module.exports = verificaIdadeASCII;
