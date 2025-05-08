//loading the express
const express = require('express');
const cors    = require('cors');
const mongoose = require('mongoose');

const env     = require('dotenv').config();
const host   = process.env.HOST;
const port   = process.env.PORT || 4000;

//loading the Database connection module.
const db = require("./db/database");
const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/product.routes');
const orderRouter = require('./routes/order.routes');


const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/users",userRouter);
app.use("/api/products",productRouter);
app.use("/api/orders",orderRouter);
app.get("/",(req,res)=>{
      res.send("<h1>Welcome to Express + MongoDB</h1>");
})

app.listen(port,host,()=>{
    console.log(`Express Server has started at http://${host}:${port}/`);
});
