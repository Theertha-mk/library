var express = require('express');
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');

// GET home page.
router.get('/', book_controller.result); 

/// BOOK ROUTES ///

// display book list
router.get('/book', book_controller.book_list);

// Display Bookdetails with specific id.
router.get('/book/:id',book_controller.book_id);

// // add items on booklist
router.post('/book', book_controller.book_post);

// update bookitems
router.put('/book/:id', book_controller.book_put);

// Delete Bookitems.
router.delete('/book/:id', book_controller.book_delete);


/// AUTHOR ROUTES ///

// display author list
router.get('/author', author_controller.author_list);

// Display author details with specific id.
router.get('/author/:id', author_controller.author_id);

// add items on author details
router.post('/author', author_controller.author_post);

// update author details
router.put('/author/:id', author_controller.author_put);


/// GENRE ROUTES ///

// display genre list
router.get('/genre', genre_controller.genre_list);

// Display genre  with specific id.
router.get('/genre/:id', genre_controller.genre_id);

// add items
router.post('/genre', genre_controller.genre_post);

// edit genre details.
router.put('/genre/:id', genre_controller.genre_put);


module.exports = router;

