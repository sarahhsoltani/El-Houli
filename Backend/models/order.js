const mongoose =require('mongoose')

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
   
      
        title:
        { type: String, 
        required: true },
        qty: 
        { type: Number,
       
        },
        image:
         { type: String, 
         required: true },
        price: 
        { type: Number, 
       }, 

        product: {
          type: mongoose.Schema.Types.ObjectId,
         
          ref: 'Produit',
        },
      
    
    
  
    
  
  }
 
)

module.exports = Order = mongoose.model('Order', orderSchema)

