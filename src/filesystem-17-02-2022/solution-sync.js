const fs = require('fs');
const path = require('path');
const solutionHandler = require('./file-handler-with-events');

const filePathToWrite = path.join(__dirname, 'txt-files', 'new_file.txt');

function solutionWithSync(filesToRead) {
  filesToRead.forEach(f => {
    const filePath = path.join(__dirname, 'txt-files', f);
    const content = fs.readFileSync(filePath, 'utf-8');
    fs.writeFileSync(filePathToWrite, `${content}\n`, { flag: 'a' });
  });

  solutionHandler.emit('finished', 'tudo pronto!');
}

module.exports = solutionWithSync;
