const express=require("express")
const router=express.Router() 
const { check } = require("express-validator");
const Comment=require("../controllers/commentController")
const client=require ('../middleware/client')
const authentification =require ("../middleware/auth")
 
//post comment
router.post("/postComment/:id",  [
    authentification,
    client,
    [
      check("text", "Text is required")
        .not()
        .isEmpty()
    ]
  ],Comment.postComment) 

  //delete comment  
  
  router.delete("/deleteComment/:id/:comment_id",authentification,Comment.deleteComment)

  module.exports=router  