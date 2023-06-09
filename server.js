const express = require('express');
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require('./config/dbConnection');

 
connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/",require("./Routes/ContactRoutes"));
app.use("/user",require("./Routes/userRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Port is starting..... on ${port}`);
});  