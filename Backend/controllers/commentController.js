const Produit =require ("../models/produit")
const { validationResult } = require("express-validator");

module.exports={
    //post comment
    postComment:async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        try {
          const publication = await Produit.findById(req.params.id);
    
          const newComment = {
            user: req.user._id,
            text: req.body.text     
          };    
    
          publication.Comments.unshift(newComment);
          await publication.save();
    
          res.json(publication.Comments);
        } catch (error) {
          console.error(error.message);
          res.status(500).send("Server Error");
        }
    },


    //delete comments
    deleteComment: async (req, res) => {
        try {
          const publication = await Produit.findById(req.params.id);
    
          const comment = publication.Comments.find(
            comment => comment.id === req.params.comment_id
          );
    
          if (!comment) {
            return res.status(404).json({ msg: "Comment does not exist" });
          }
    
          if (  
            comment.user.toString() !== req.user._id &&
            req.user.role !== "Admin"
          ) {
            return res.status(401).json({ msg: "unauthentification" });
          }
    
          const removeIndex = publication.Comments.map(
            comment => comment.id
          ).indexOf(req.params.comment_id);
    
          publication.Comments.splice(removeIndex, 1);
    
          await publication.save();
    
          res.json(publication.Comments);
        } catch (error) {
          console.error(error.message);
          res.status(500).send("Server Error");
        }
    }
}