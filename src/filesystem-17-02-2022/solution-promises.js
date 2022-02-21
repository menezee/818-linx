const fsPromise = require('fs').promises;
const path = require('path');

const filePathToWrite = path.join(__dirname, 'txt-files', 'new_file.txt');

const solutionWithPromises = (filesToRead) => {
  filesToRead.forEach(f => {
    const filePath = path.join(__dirname, 'txt-files', f);
    fsPromise
      .readFile(filePath, 'utf-8')
      .then((data) => {
        fsPromise.writeFile(filePathToWrite, `${data}\n`, { flag: 'a' });
      })
      .catch(err => {
        throw new Error('error reading file', f);
      })
  });
}

module.exports = solutionWithPromises;
