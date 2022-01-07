const bookshelf = require('../database');
const Author = require("../models/author");
const Genre=require("../models/genre")
const Book = bookshelf.model('Book', {
tableName: 'book',
author() {
  return this.hasOne("Author",)
},
genre() {
    return this.hasOne("Genre")
  }
  });
  
module.exports = Book;