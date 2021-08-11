const express=require ("express")
const router=express.Router()
const order=require("../controllers/orderController")

//post order
router.post("/postOrder",order.addOrderItems)

module.exports=router  