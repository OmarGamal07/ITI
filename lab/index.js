const restify = require('restify');
const Ajv = require('ajv').default;
require('./helpers/db');
const postSchema = require('./schemas/post');
const commentSchema = require('./schemas/comment');
const express = require("express");
const mongoose = require("mongoose");
const ajv = new Ajv();

const userModel = require('./models/user');
const postModel = require('./models/post');
const commentModel = require('./models/comment');
// const app = express();

// app.use(express.json());

// const postRouter = require("./routes/post");
// app.use("/post", postRouter);

// const commentRouter = require("./routes/comments");
// app.use("/comment", commentRouter);

const server = restify.createServer({
  // options
});


server.use(restify.plugins.bodyParser());

server.post('/post', restify.plugins.conditionalHandler([
  {
    version: ['1.0.0', '2.0.0'],
    handler: [
      (req, res, next) => {
              const post = req.body;
              const validate = ajv.compile(postSchema);
              const valid = validate(post);
              if (valid) return next();
              next({ isValidationError: true, errors: validate.errors });
            },
       async(req,res)=>{
            
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

server.get('/post', restify.plugins.conditionalHandler([
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

server.get('/post/:authorId', restify.plugins.conditionalHandler([
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
server.post('/comment', restify.plugins.conditionalHandler([
  {
    version: ['1.0.0', '2.0.0'],
    handler: [
      (req, res, next) => {
              const comment = req.body;
              const validate = ajv.compile(commentSchema);
              const valid = validate(comment);
              if (valid) return next();
              next({ isValidationError: true, errors: validate.errors });
            },
            async(req,res)=>{
    
              try {
                  const comment = await commentModel.create(req.body);
                  return res.json(comment);
                } catch (error) {
                    return res.send(error);
                  }
          }
    ]
  }
]));

server.get('/comment/:postId', restify.plugins.conditionalHandler([
  {
    version: ['1.0.0', '2.0.0'],
    handler: [
      async(req,res)=>{
    
        try {
            const comment = await commentModel.find({post:req.params.postId});
            return res.json(comment);
          } catch (error) {
              return res.send(error);
            }
    }
    ]
  }
]));
// // to define middleware:
// // server.use((req, res, next) => {
// //   next();
// // });


// // server.get('/api/users');

// //TODO: COMPLETE ROUTE NAMES
// server.get('', restify.plugins.conditionalHandler([
//   {
//     version: ['1.0.0', '2.0.0'],
//     handler: [
//       async (req, res) => {
//         res.send("TODO");
//       }
//     ]
//   }
// ]));

// server.post('', restify.plugins.conditionalHandler([
//   {
//     version: ['1.0.0', '2.0.0'],
//     handler: [
//       (req, res, next) => {
//         const post = req.body;
//         const validate = ajv.compile(postSchema);
//         const valid = validate(post);
//         if (valid) return next();
//         next({ isValidationError: true, errors: validate.errors });
//       },

//       async (req, res) => {
//         res.send("TODO");
//       }
//     ]
//   }
// ]));

// server.on('restifyError', (req, res, err, cb) => {
//   if (err.isValidationError) { 
//     res.status(422);
//     res.send("TODO");
//   }
//   cb();
// });




server.listen(3333, () => { console.log("server is listening" )});


// Create RESTful API with the following
// list posts
// list comments on specific post
// create post and handle any kind of validation usign middleware
// list posts that created by a specific user