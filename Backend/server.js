const express = require('express');
const connectDB = require('./config/db');
const app = express();
//connexion db
connectDB();
app.use(express.json());

//routers
const users=require("./routes/usersRouter")
const produits=require("./routes/produitRouter")
const comment=require ("./routes/commentRouter")
//midlewares
app.use('/api/users',users)
app.use('/api/produits',produits)
app.use('/api/comments',comment)   

//config server
const port = process.env.PORT || 4000; 
app.listen(port, () => console.log(`Server running on port ${port}`));