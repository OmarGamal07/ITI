const express = require('express');
const router = express.Router();
//model

const postModel = require("../models/post");
const commentModel = require("../models/comment");

router.post('/',async(req,res,next) =>{ 
    if(!req.body.content || !req.body.author || !req.body.post ){
        return  next({ isValidationError: true, errors: "enter all data" });
    }
},async(req,res)=>{
    
    try {
        const comment = await commentModel.create(req.body);
        return res.json(comment);
      } catch (error) {
          return res.send(error);
        }
})

router.get('/:postId',async(req,res)=>{
    
    try {
        const comment = await commentModel.find({post:req.params.postId});
        return res.json(comment);
      } catch (error) {
          return res.send(error);
        }
})



module.exports = router;

