const productModel = require("../model/product.model");
const addProduct = async(req,res)=>{
   try{
    const productObj= await productModel.create({
               'product_id':"item-"+ Math.floor(Math.random()*99999)+"-"+Date.now(),
               'product_name':req.body.pname,
               'product_desc':req.body.pdesc,
               'product_price':req.body.pprice,
               'product_image':req.file.filename
        });
        if(!productObj) res.status(403).json({"message":"Something went wrong"});
        else res.status(200).json({"message":"product has been added successfully"});
    }
    catch(error){
           res.status(403).json(error);
    }
}


const viewAllProducts = async(req,res)=>{
    try{
      const productObj =  await productModel.find();
      if(!productObj) res.status(403).json({"message":"empty dataset"});
      else {
        res.status(200).json(productObj);
      }
    }
    catch(error){
        res.status(403).json(error);
    }
}

const viewProductById = async(req,res)=>{
    try{
    const productObj=   await  productModel.findOne({"product_id":req.params.pid});
    if(!productObj) res.status(403).json({"message":"no products found"});
    else {
        res.status(200).json(productObj);
    }    
}
    catch(error){
        res.status(403).json(error);

    }
}


const updateProductsById = async(req,res)=>{
    try{  
    const productObj= 
      await productModel.updateOne(
        {"product_id":req.params.pid},
        {$set:
            {'product_name':req.body.pname,
            'product_desc':req.body.pdesc,
            'product_price':req.body.pprice
        }});
        if(!productObj) res.status(403).json({"message":"unable to update"});
        else res.status(200).json({"message":"product has benn updated successfully !"});

    }
    catch(error){
       // res.status(403).json(error);
    throw error;
    }


}

const deleteProductsById = async(req,res)=>{
    try{
      const productObj =   await productModel.deleteOne({"product_id":req.params.pid});
      if(!productObj) res.status(403).json({"message":"Unable to delete"});
      else res.status(200).json({"message":"One product successfully removed"});
    }
    catch(error){
        res.status(403).json(error);
    }
}

module.exports = {
     addProduct,
     viewAllProducts,
     viewProductById,
     updateProductsById,
     deleteProductsById
};
console.log("ProductController is working");
