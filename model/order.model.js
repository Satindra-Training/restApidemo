const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    "order_id":{
        type:String,
        required:[true,'order id randomly generated']
    },
    "order_date":{
          type:Date,
          required:[true,'Order Date is System Generated'],
          default: new Date()
    },
    "user_id":{
          type:mongoose.Types.ObjectId,
          ref:"userModel"
    },
    "product_id":{
        type:mongoose.Types.ObjectId,
        ref:'productModel'
    }
},{versionKey:false});

module.exports= mongoose.model("orderModel",orderSchema,"ordersInfo");
console.log("order model is working");
