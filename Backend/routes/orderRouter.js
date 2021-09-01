const express=require ("express")
const router=express.Router()
const order=require("../controllers/orderController")
const authentification =require ("../middleware/auth")

//post order
router.post("/postOrder",authentification,order.addOrderItems)
// get order byId
router.get("/getOrderById/:id",order.getOrderById)
// get All orders
router.get("/getOrders",order.getOrders)
module.exports=router  