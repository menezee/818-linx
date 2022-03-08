const knex = require('knex')({
  client: 'mysql',
  version: '5.7',
  connection: {
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'pass',
    database : 'beer',
  }
});

module.exports = knex;

/*
docker run -p 3306:3306 --name nodejs-mysql-beer -e MYSQL_ROOT_PASSWORD=pass -e MYSQL_DATABASE=beer -d mysql:5.7
*/
