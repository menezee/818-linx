const http = require('http');
const beerRouter = require('./routes/beer-router');
const { fetchPokemon } = require('./helpers');
const URL = require('url');

const server = http.createServer();

server.on('request', async (req, res) => {
  const { method, url } = req;
  const { query } = URL.parse(req.url, true);

  if (url.startsWith('/poke')) {
    const pokemonName = await fetchPokemon(query.id);
    res.end(pokemonName);

  } else if (url.startsWith('/beer')) {
    beerRouter(req, res);

  } else {
    res.statusCode = 404;
    res.end('resource not found');
  }
});

server.listen(8080, () => {
  console.log(`escutando em http://localhost:8080`);
});