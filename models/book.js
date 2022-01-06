const bookshelf = require('../database');
const Book = bookshelf.model('Book', {
tableName: 'book',
author() {
  return this.hasMany("Author")
},
genre() {
    return this.hasMany("Genre")
  }
  });
  
module.exports = Book;