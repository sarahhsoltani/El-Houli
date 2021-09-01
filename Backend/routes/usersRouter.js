const express=require("express")
const router=express.Router() 
const { check } = require("express-validator");
const User =require ("../controllers/userCoontrollers")
const authentification = require ("../middleware/auth")
const admin =require ("../middleware/admin")
router.post("/register",
    [
      check("name", "please enter your name")
        .not()
        .isEmpty(),
      check("email", "please enter a valid email").isEmail(),
      check("password", "please enter a password")
        .not()
        .isEmpty(),
      check("role", "wrong role mate").isIn(["Vendeur", "Client", "Admin"])
    ],User.registerUsers)

router.post("/login",[
    check("email", "enter a valid email").isEmail(),
    check("password", "enter a password")
      .not()
      .isEmpty()
  ],User.loginUsers)

router.get("/allUser",User.getUsers)
router.get("/allUserAdmin",User.AllUsers)
router.get("/current",authentification,User.currentUsers)
router.delete("/deleteUser/:id",authentification,admin,User.deleteUser)
module.exports=router 
