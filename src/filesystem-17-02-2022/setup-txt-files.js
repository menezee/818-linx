const fsPromise = require('fs').promises;
const path = require('path');

const filesToRead = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
];

(async function setup() {
  const contents = [
    'Pasta de amendoim',
    'Sushi',
    'Coca-cola',
  ];

  filesToRead.map((f, idx) => {
    const filePath = path.join(__dirname, 'txt-files', f);
    const content = contents[idx];
    fsPromise.writeFile(filePath, content);
  });

  await fsPromise.unlink(path.join(__dirname, 'txt-files', 'new_file.txt'));
})();