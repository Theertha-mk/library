const Book = require("../models/book");

// Display list of all Books.
exports.book_list=async(req, res, next)=> {
    const books=await Book.fetchAll();
    res.json({status:true,books});
}

// Display Bookdetails with specific id.
exports.book_id=async (req, res) => {
    var books = await Book.where('id',parseInt(req.params.id)).fetch();
    res.json(books);
};

// add items on booklist
exports.book_post=async(req,res)=>{
    var books = await  Book.forge({...req.body}).save();
    res.json(books);
};

// update bookitems
exports.book_put=async (req, res) => {
    var books = await  Book.where('id',parseInt(req.params.id)).save({...req.body},{ patch: true });
    res.json(books);  
}

//delete book items
exports.book_delete= async (req, res) => {
    var books = await  Book.where('id',parseInt(req.params.id)).destroy();
    res.json(books);  
}

