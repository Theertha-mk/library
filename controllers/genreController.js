const Genre=require("../models/genre")

// Display list of all genre list.
exports.genre_list= async(req, res, next)=> {
  const genres=await Genre.fetchAll();
  res.json({status:true,genres});
}

// Display genre  with specific id.
exports.genre_id=async (req, res) => {
  var genres = await Genre.where('id',parseInt(req.params.id)).fetch();
  res.json(genres);
};

// add items
exports.genre_post=async(req,res)=>{
  var genres= await  Genre.forge(
        {...req.body}
  ).save();
  res.json(genres);
};

// edit genre details.
exports.genre_put=async (req, res) => {
  var genres = await Genre.where('id',parseInt(req.params.id)).save(
    {...req.body},
    { patch: true }
    );
  res.json(genres);  
}