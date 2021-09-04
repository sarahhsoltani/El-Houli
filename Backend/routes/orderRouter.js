const express=require ("express")
const router=express.Router()
const order=require("../controllers/orderController")
const authentification =require ("../middleware/auth")

//post order 
router.post("/postOrder/:id",authentification,order.addOrderItems)
// get order byId
router.get("/getOrderById/:id",authentification,order.getOrderById)
// get All orders
//router.get("/getOrders",order.getOrders)
module.exports=router  