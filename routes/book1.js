 const Book = require("../models/book");

 var express = require('express');
 var router = express.Router();


 router.get('/', async(req, res, next)=> {
   const books=await Book.fetchAll();
   res.json({status:true,books});
  })
 router.get("/:id", async (req, res) => {
   var books = await Book.where('id',parseInt(req.params.id)).fetch();
   res.json(books);
 });
 router.post("/",async(req,res)=>{
   var books = await  Book.forge(
        {...req.body}
   ).save();
   res.json(books);
  });
 router.put("/:id", async (req, res) => {
    var books = await  Book.where('id',parseInt(req.params.id)).save(
      {...req.body},
      { patch: true }
      );
    res.json(books);  
  })
  router.delete("/:id", async (req, res) => {
    var books = await  Book.where('id',parseInt(req.params.id)).destroy();
    res.json(books);  
  })
module.exports = router;