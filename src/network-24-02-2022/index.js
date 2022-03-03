const http = require('http');
const beerRouter = require('./routes/beer-router');

const server = http.createServer();

server.on('request', async (req, res) => {
  const { method, url } = req;

  if (url.startsWith('/beer')) {
    beerRouter(req, res);

  } else {
    res.statusCode = 404;
    res.end('resource not found');
  }
});

server.listen(8080, () => {
  console.log(`escutando em http://localhost:8080`);
});