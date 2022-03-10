// https://api.openbrewerydb.org/breweries

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const beerRouter = require('./beer');

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.melhorEscola = 'lets code';
  next();
});

app.use('/beer', beerRouter);

app.listen(8080);
