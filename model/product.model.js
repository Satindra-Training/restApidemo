const mongoose = require('mongoose');
//create a productSchema 
 const productSchema = mongoose.Schema({
      "product_id":{
           type:String,
           required:[true,'product id will auto generated']
      },
      "product_name":{
        type:String,
        required:[true,'product name must be provided']
      },
      "product_desc":{
        type:String,
        required:[true,'desc must be provided']
      },
      "product_price":{
        type:Number,
        required:[true,'price must be provided'],
        validate:{
            validator:(value)=> value>=0,
            message : (props)=>`${props.value} can't be zero or -ve`
        }
      },
      "product_image":{
        type:String,
        required:[true,'image must be uploaded']
      },
      "product_entry_date":{
         type:Date,
         default: new Date(),
         required:[true,'Date will be auto calculated']
      }
},{versionKey:false});

module.exports =  mongoose.model("productModel",productSchema,"products");
console.log("Product Model is Ready to Operate");
