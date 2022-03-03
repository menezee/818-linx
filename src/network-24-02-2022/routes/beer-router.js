const path = require('path');
const URL = require('url');
const gtts = require('node-gtts')('pt');

const {
  readTxtFiles,
  createHTMLBody,
  getBodyWithForAwait,
  writeTxtFile,
  FOLDER_PATH,
} = require('../helpers');

async function beerRouter(req, res) {
  const { method } = req;

  if (method === 'GET') {
    handleGETRequest(req, res);
  } else if (method === 'POST') {
    handlePOSTRequest(req, res);
  } else {
    res.statusCode = 404;
    res.end('method not implemented');
  }
}

async function handlePOSTRequest(req, res) {
  const body = await getBodyWithForAwait(req);
  const result = await writeTxtFile(body);

  res.writeHead(201, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(result));
}

async function handleGETRequest(req, res) {
  const { query, host, pathname, search } = URL.parse(req.url, true);
  // console.log({
  //   host,
  //   pathname,
  //   search,
  //   encrypted: req.socket.encrypted,
  //   headerURL: req.headers.host,
  //   localAddress: req.socket.localAddress,
  //   port: req.socket.localPort,
  // });
  const contentType = query['content-type'];

  const filesContent = await readTxtFiles(FOLDER_PATH);

  if (contentType === 'html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const HTMLContent = createHTMLBody(filesContent);
    res.end(HTMLContent);

  } else if (contentType === 'json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const JSONContent = { cervejas: filesContent };
    const JSONContentAsStr = JSON.stringify(JSONContent);
    res.end(JSONContentAsStr);

  } else if (contentType === 'audio') {
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
    res.end('beer not found');
  }
}

module.exports = beerRouter;
