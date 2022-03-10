//                        Sobrescrever SOBRENOME no dotenv
require('dotenv').config({ override: true });

// Criar um arquivo .env e adicionar uma variável NOME
console.log(process.env.nome);

// Imprimir essa variável SOBRENOME
console.log(process.env.sobrenome);

console.log('\n--------------\n');

const { DateTime } = require('luxon');

// Criar e imprimir o dia de ontem
const today = DateTime.now();
const yesterday = today.minus({ days: 1 });

console.log(`Yesterday is: ${yesterday.toString()}`);

// Criar o dia 5 do mês de julho desse ano às 15h usando o método fromObject
const reallySpecificDate = DateTime.fromObject({ day: 5, month: 7, hour: 15 });
console.log({ reallySpecificDate: reallySpecificDate.toLocaleString(DateTime.DATETIME_MED) });

// Imprimir, em alemão, o dia da semana da data 15 dias antes da véspera de natal de 1980
const fifteenDaysBefore1980ChristmasEve = (
  DateTime
    .fromObject({
      day: 24,
      year: 1980,
    })
    .setLocale('de')
    .minus({
      days: 15,
    })
    .toLocaleString({
      weekday: 'long',
    })
);

console.log({ fifteenDaysBefore1980ChristmasEve: fifteenDaysBefore1980ChristmasEve.toString() });
