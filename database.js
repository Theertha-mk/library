const knex = require('knex')({
    client: 'mysql',
    connection: {
      host     : 'localhost',
      user     : 'root',
      password : 'theertha@123',
      database : 'libmanage',
      charset  : 'utf8'
    }
  });
  bookshelf = require('bookshelf')(knex);
  module.exports = bookshelf;
 