const express = require('express');
const app = express();

app.get("/api",(req,res)=>{
    res.json({"users":["useraone","usertwo"]})
})

app.listen(5000,()=>{
    console.log("Server stated on port 5000");
})