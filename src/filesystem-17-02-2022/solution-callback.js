const fs = require('fs');
const path = require('path');

const filePathToWrite = path.join(__dirname, 'txt-files', 'new_file.txt');

function solutionWithCallback(filesToRead) {
  filesToRead.forEach(f => {
    const filePath = path.join(__dirname, 'txt-files', f);
    fs.readFile(filePath, 'utf-8', function (err, data) {
      if (err !== null) throw new Error('error reading file', f, err);

      fs.writeFile(filePathToWrite, `${data}\n`, { flag: 'a' }, (err) => {
        if (err !== null) throw new Error('error writing to', filePathToWrite, err);
      });
    });
  });
}

module.exports = solutionWithCallback;
