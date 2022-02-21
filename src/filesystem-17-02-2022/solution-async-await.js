const fsPromise = require('fs').promises;
const path = require('path');

const filePathToWrite = path.join(__dirname, 'txt-files', 'new_file.txt');

async function solutionWithAsyncAwait(filesToRead) {
  for (file of filesToRead) {
    const filePath = path.join(__dirname, 'txt-files', file);
    const content = await fsPromise.readFile(filePath, 'utf-8');
    await fsPromise.writeFile(filePathToWrite, `${content}\n`, { flag: 'a' });
  }
}

module.exports = solutionWithAsyncAwait;
