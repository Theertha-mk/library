const Author = require("../models/author");

// Display list of all author list.
exports.author_list=async(req, res)=> {
  const authors=await Author.fetchAll();
  res.json({status:true,authors});
}

// Display author details with specific id.
exports.author_id=async (req, res) => {
  var authors = await Author.where('id',parseInt(req.params.id)).fetch();
  res.json(authors);
};

// add items on author details
exports.author_post=async(req,res)=>{
  var authors = await  Author.forge(
        {...req.body}
  ).save();
  res.json(authors);
};

// update author details
exports.author_put=async (req, res) => {
  var authors = await  Author.where('id',parseInt(req.params.id)).save(
    {...req.body},
    { patch: true }
    );
  res.json(authors);  
}

//delete author items
// exports.author_delete= async (req, res) => {
//   var authors = await  Author.where('id',parseInt(req.params.id)).destroy();
//   res.json(authors);  
// }
