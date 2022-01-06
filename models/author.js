const bookshelf = require('../database');
const Author = bookshelf.model('Author', {
tableName: 'author'
})
module.exports = Author;