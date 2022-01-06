const Book = require("../models/book");
const Author = require("../models/author");
// const Genre=require("../models/genre")

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res, next)=> {
  const books=await Book.fetchAll();
  res.json({status:true,books});
})


// async function fetchdata(){
//   try{
//      //  let output= await Book.forge({ 'title':'Cheque book','author_name':'Vasdev Mohi','ISBIN':16841034 }).fetch();
//    //  let output = await Book.where({'title':'Cheque book' }).fetch({require:true});
//     // let output= await Book.fetchAll();
   
     
     
//      let val= await Author.forge({'id':4,'firstname':'Vasde','lastname':'Mohi','birth_date':'03-08-1890','death_date':'00-00-0000'}).save();
//     console.log(val.toJSON());
//     out1=val.id;
//     let result= await Author.forge({'id':2,'name':'adventure'}).save();
//     console.log(result.toJSON());
//     out2=output.id;
//     let output = await Book.forge({ 'title':'One Indian Girl','author_id':out1,'summary':'related to women issues and challenges in the world','ISBIN':16841034,'genre_id':out2 }).save();
//      console.log(output.toJSON());
//   }
//   catch(e){
//       console.log(e);
//      }
//   }
//   fetchdata();
  
module.exports = router;
