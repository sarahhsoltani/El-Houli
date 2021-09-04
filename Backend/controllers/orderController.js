const Order =require ('../models/order')


module.exports={
    // @desc    Create new order
// @route   POST /api/orders
// @access  Private
addOrderItems: async (req, res) => {
  try {
      
    const { title,qty,image,price } = req.body;
    
    const orders = new Order({
      title,
      qty,
      image,
      price,
     
     user: req.user._id 
    });
    orders.save();
    res.status(201).send(orders);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
},

  // @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private

getOrderById: async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user", "-password")
      

    return res.send(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
}

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
//  getOrders : async (req, res) => {
//   const orders = await Order.find({}).populate('user', 'id name')
//   res.json(orders)
// }
  
} 