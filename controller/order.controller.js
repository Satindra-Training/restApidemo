const orderModel = require("../model/order.model");

const placeOrder = async(req,res)=>{
  try{ 
  const orderObj= await orderModel.create({
          "order_id"     : "order-"+Math.floor(Math.random()*9999)+"-"+Date.now(),
          "user_id"      : req.params.uid,
          "product_id"   : req.params.pid
      });
      if(!orderObj) res.status(403).json({"message":"Unable to Place Order Now"});
      else          res.status(200).json({"message":"Order Placed Successfully !"});

    }
    catch(error){
       res.status(403).json(error);    
    }
}

const viewOrder = async(req,res)=>{
   try{
    const orderObj =  await  orderModel.findOne({"order_id":req.params.oid})
                                       .populate("user_id")
                                       .populate("product_id");
    if(!orderObj) res.status(403).json({"message":"no such order found!"});   
    else res.status(200).json({
             "orderInfo":{
                    "order_id":orderObj.order_id,
                    "order_date":orderObj.order_date,
                    "product": {
                        "product_id":orderObj.product_id.product_id,
                        "name"      :orderObj.product_id.product_name,
                        "price"     :orderObj.product_id.product_price
                    },
                    "user":{
                            "user_id": orderObj.user_id.user_id,
                            "name"   : orderObj.user_id.name,
                            "email"  : orderObj.user_id.email
                    }
             }
    });

}
   catch(error){
     res.status(403).json(error);
   }
}

module.exports = {
      placeOrder,
      viewOrder
};

console.log("OrderController is working");