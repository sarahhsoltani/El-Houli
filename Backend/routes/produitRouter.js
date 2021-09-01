const express=require("express")
const router=express.Router()
const { check } = require("express-validator");
const Produit=require('../controllers/prduitController')
const vendeur =require ("../middleware/vendeur")
const authentification =require ("../middleware/auth")
const admin =require("../middleware/admin")
const Comment=require("../controllers/commentController")
const client=require ('../middleware/client')

// post produit
router.post("/newProduit",[ 
  
    authentification,
     vendeur,
    check("title", "please enter your pub title")
      .not()
      .isEmpty(),
    check("description", "please enter your pub description")
      .not()
      .isEmpty(),
    check("image", "please enter your instrument image")
      .not()  
      .isEmpty(),

    check("price", "please enter your instrument price")
      .not()
      .isEmpty(),
    check("category", "please enter your instrument category")
      .not()
      .isEmpty(), 
      check("countInStock", "please enter your instrument countInStock")
      .not()
      .isEmpty()
  ],Produit.postProduit,)
//   get produit
router.get("/getPoducts",Produit.getProduit)
// get recent product
router.get("/recent",Produit.recentProduit)
// get product by is user
router.get("/getProduitById/:id",Produit.getProduitById)
// modify product
router.put("/moodifyProduct/:id",
[
  authentification,
  vendeur,
  check("title", "please enter your pub title")
    .not()
    .isEmpty(),
  check("description", "please enter your pub description")
    .not()
    .isEmpty(),
  check("image", "please enter your instrument image")
    .not()
    .isEmpty(),
  check("category", "please enter your instrument category")
    .not()
    .isEmpty(),  
    
  check("price", "please enter your instrument price")
    .not()
    .isEmpty(),
    check("countInStock", "please enter your instrument countInStock")
    .not()
    .isEmpty()
],Produit.putProduit)
//delete product    
router.delete("/deleteProduit/:id",authentification,Produit.deleteProduit)



module.exports=router     