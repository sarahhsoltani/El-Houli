const Order =require ('../models/order')


module.exports={
    // @desc    Create new order
// @route   POST /api/orders
// @access  Private
addOrderItems : async (req, res) => {
    const {
      orderItems,
      user
    } = req.body
  
    if (orderItems && orderItems.length === 0) {
      res.status(400)
      throw new Error('No order items')
      return
    } else {
      const order = new Order({
        orderItems,
         user: req.user._id    
      
      })
  
      const createdOrder = await order.save()
  
      res.status(201).json(createdOrder)
    }
  }
  
}