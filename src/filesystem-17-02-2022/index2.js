const fsPromise = require('fs').promises;
const path = require('path');

const newFilePath = path.join(__dirname, 'txt-files', 'new_file.txt');
const folderPath = path.join(__dirname, 'txt-files');
fsPromise
  .readdir(folderPath)
  .then(files => {
    files.forEach(file => {
      const filePath = path.join(__dirname, 'txt-files', file);
      fsPromise
        .readFile(filePath, 'utf-8')
        .then(content => {
          const contentWithLineBreak = `${content}\n`;
          fsPromise
            .writeFile(newFilePath, contentWithLineBreak, { flag: 'a' });
        });
    });
  });
