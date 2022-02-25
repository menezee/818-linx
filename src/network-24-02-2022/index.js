const http = require('http');
const fsPromise = require('fs').promises;
const path = require('path');
const gtts = require('node-gtts')('pt');

const server = http.createServer();

async function readTxtFiles(folderPath) {
  if (folderPath === undefined) {
    throw new Error('folderPath is undefined');
  }

  try {
    const files = await fsPromise.readdir(folderPath);
    const readPromises = files.map(file => {
      const filePath = path.join(__dirname, 'txt-files', file);
      return fsPromise.readFile(filePath, 'utf-8');
    });
    return Promise.all(readPromises);
  } catch (err) {
    throw new Error('error reading files', err);
  }
}

function createHTMLBody(items) {
  const liItems = (
    items
      .map((item) => (`<li>${item}</li>`))
      .join('')
  );

  return `
    <div
      style="width: 100vw;
             height: 100vh;
             text-align: center;">
      <h1>Cervejas</h1>
      <ul>
        ${liItems}
      </ul>
    </div>
  `;
}

server.on('request', async (req, res) => {
  const { method, url } = req;

  const folderPath = path.join(__dirname, 'txt-files');
  const filesContent = await readTxtFiles(folderPath);

  if (url === '/html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const HTMLContent = createHTMLBody(filesContent);
    res.end(HTMLContent);

  } else if (url === '/json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const JSONContent = { cervejas: filesContent };
    const JSONContentAsStr = JSON.stringify(JSONContent);
    res.end(JSONContentAsStr);

  } else if (url === '/audio') {
    res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
    const contentsAsStr = `Nossas cervejas são ${filesContent.join(', e ')}`;
    const readStream = gtts.stream(contentsAsStr);

    readStream.pipe(res);
    readStream.on('end', () => {
      console.log('ended streaming audio to response!');
      res.end();
    });

  } else {
    res.statusCode = 404;
    res.end('resource not found');
  }
});

server.listen(8080, () => {
  console.log(`escutando em http://localhost:8080`);
});