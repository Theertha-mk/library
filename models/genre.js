const bookshelf = require('../database');
const Genre = bookshelf.model('Genre', {
tableName: 'genre'
})
module.exports = Genre;