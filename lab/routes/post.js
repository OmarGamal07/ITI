const express = require('express');
const router = express.Router();
const restify = require('restify');
const server = restify.createServer({
    // options
  });
  
  
  server.use(restify.plugins.bodyParser());
  
  
//model

const postModel = require("../models/post");
// router.post('/',async(req,res,next) =>{ 
//     if(!req.body.title || !req.body.content || !req.body.author ){
//         return  next({ isValidationError: true, errors: "enter all data" });
//     }
// },async(req,res)=>{
    
//     try {
//         const post = await postModel.create(req.body);
//         return res.json(post);
//       } catch (error) {
//           return res.send(error);
//         }
// })
server.post('/', restify.plugins.conditionalHandler([
  {
    version: ['1.0.0', '2.0.0'],
    handler: [
        (req,res,next) =>{ 
            if(!req.body.title || !req.body.content || !req.body.author ){
                return  next({ isValidationError: true, errors: "enter all data" });
            }
        },async(req,res)=>{
            
            try {
                const post = await postModel.create(req.body);
                return res.json(post);
              } catch (error) {
                  return res.send(error);
                }
        }
    ]
  }
]));
// router.get('/',async(req,res)=>{
    
//     try {
//         const post = await postModel.find({});
//         return res.json(post);
//       } catch (error) {
//           return res.send(error);
//         }
// })

server.get('/', restify.plugins.conditionalHandler([
  {
    version: ['1.0.0', '2.0.0'],
    handler: [
        async(req,res)=>{
    
            try {
                const post = await postModel.find({});
                return res.json(post);
              } catch (error) {
                  return res.send(error);
                }
        }
    ]
  }
]));
// router.get('/:authorId',async(req,res)=>{
    
//     try {
//         const post = await postModel.find({author:req.params.authorId});
//         return res.json(post);
//       } catch (error) {
//           return res.send(error);
//         }
// })
server.get('/:authorId', restify.plugins.conditionalHandler([
    {
      version: ['1.0.0', '2.0.0'],
      handler: [
        async(req,res)=>{
    
            try {
                const post = await postModel.find({author:req.params.authorId});
                return res.json(post);
              } catch (error) {
                  return res.send(error);
                }
        }
      ]
    }
  ]));
module.exports = router;

