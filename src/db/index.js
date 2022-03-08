const knex = require('./db');

async function getBeers() {
  const beers = (
    await knex
      .select()
      .table('Beer')
  );

  console.log('list of beers from db', beers.map(b => b.name));
  return beers;
}

getBeers();
console.log('foo');
