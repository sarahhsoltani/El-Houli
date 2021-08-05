const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();
app.use(express.json());


const users=require("./routes/usersRouter")

app.use('/api/users',users)

//config server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));