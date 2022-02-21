const fsPromise = require('fs').promises;
const path = require('path');
const solutionHandler = require('./file-handler-with-events');

// const solutionWithCallback = require('./solution-callback');
// const solutionWithAsyncAwait = require('./solution-async-await');
// const solutionWithPromises = require('./solution-promises');
const solutionWithSync = require('./solution-sync');

const isSetup = process.argv[2];
const filesToRead = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
];

solutionHandler.on('finished', (msg) => {
  console.log('Recebi evento para deletar: ', filesToRead.join(', '), { msg });

  filesToRead.forEach(f => {
    const filePath = path.join(__dirname, 'txt-files', f);
    fsPromise.unlink(filePath);
  });
});

// ---------------------------------
// PARA RODAR:
// npm start OU node index.js
// le conteudo de file1.txt, file2.txt, e file3.txt e escreve num arquivo novo chamado new_file.txt
//
// npm run reset OU node index.js true
// deleta o arquivo new_file.txt e recria os arquivos file1.txt, file2.txt, e file3.txt
// ---------------------------------

if (isSetup) {
  require('./setup-txt-files'); // deletes new_file.txt and recreates file1.txt, file2.txt, file3.txt
} else {
  // solutionWithCallback(filesToRead);
  // solutionWithAsyncAwait(filesToRead);
  // solutionWithPromises(filesToRead);
  solutionWithSync(filesToRead);
}
