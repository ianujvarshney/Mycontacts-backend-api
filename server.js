const express = require('express');
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use("/",require("./Routes/ContactRoutes"));

app.listen(port,()=>{
    console.log(`Port is starting..... on ${port}`);
}); 