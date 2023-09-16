const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config(); // Load dotenv configuration
app.use(express.json());

const MONGODB_URI = process.env.DATABASE_URL; 
mongoose.connect(MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connected to MongoDb");
})
.catch((err)=>{
    console.log("Error while connecting to databse",err.message);
})

app.get("/api",(req,res)=>{
    res.json({"users":["useraone","usertwo"]})
})

app.listen(5000,()=>{
    console.log("Server stated on port 5000");
})