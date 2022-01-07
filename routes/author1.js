const Author = require("../models/author");
var express = require('express');
var router = express.Router();

router.get('/', async(req, res)=> {
  const authors=await Author.fetchAll();
  res.json({status:true,authors});
})
router.get("/:id", async (req, res) => {
  var authors = await Author.where('id',parseInt(req.params.id)).fetch();
  res.json(authors);
});
router.post('/',async(req,res)=>{
  var authors = await  Author.forge(
        {...req.body}
  ).save();
  res.json(authors);
});
router.put("/:id", async (req, res) => {
  var authors = await  Author.where('id',parseInt(req.params.id)).save(
    {...req.body},
    { patch: true }
    );
  res.json(authors);  
})

module.exports = router;