const express = require('express');
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.json({message: "hello world"})
})

app.listen(port,()=>{
    console.log(`Port is starting..... on ${port}`);
}); 