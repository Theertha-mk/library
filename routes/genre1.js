// const Book = require("../models/book");
// const Author = require("../models/author");
const Genre=require("../models/genre")

var express = require('express');
var router = express.Router();


router.get('/', async(req, res, next)=> {
  const genres=await Genre.fetchAll();
  res.json({status:true,genres});
})
router.post("/",async(req,res)=>{
  var genres= await  Genre.forge(
        {...req.body}
  ).save();
  res.json(genres);
});
router.put("/:id", async (req, res) => {
  var genres = await  Book.where('id',parseInt(req.params.id)).save(
    {...req.body},
    { patch: true }
    );
  res.json(genres);  
})
module.exports = router;