const express = require('express');
const connectDB = require('./config/db');
const  colors=require ('colors')
const app = express();
const cors = require('cors')
//connexion db
connectDB();
app.use(express.json());
app.use(cors())

//routers
const users=require("./routes/usersRouter")
const produits=require("./routes/produitRouter")
const comment=require ("./routes/commentRouter")
const orders=require("./routes/orderRouter")
//middlewares
app.use('/api/users',users)  
app.use('/api/produits',produits)
app.use('/api/comments',comment)  
app.use("/api/orders",orders)
//config server
const port = process.env.PORT || 4000; 
app.listen(port, () => console.log(`Server running on port ${port}`.yellow.bold));  