const bookshelf = require('../database');
const Author = bookshelf.model('Author', {
tableName: 'author',
idAttribute:'id'
})
module.exports = Author;