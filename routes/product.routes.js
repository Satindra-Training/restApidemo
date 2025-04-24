const express = require('express');
const productRouter = express.Router();

const multer = require("multer");

const upload = multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,Math.floor(Math.random()*999999)+"-"+Date.now()+file.originalname);

    },
    destination:"./public/uploads/"
})
const uploadObj = multer({storage:upload});
//importing productController.
const productController = require("../controller/product.controller");
//POST Adding new Products into the Database.
productRouter.post("/add",uploadObj.single('pAvatar'),productController.addProduct);
//getting all products from the Database.
productRouter.get("/all",productController.viewAllProducts);
//getting specific product from the database depends on product_id
productRouter.get("/show/:pid",productController.viewProductById);
//Updating pre existing products from the Database.
productRouter.put("/update/:pid",productController.updateProductsById);
//deleting exisiting products from the Database.
productRouter.delete("/delete/:pid",productController.deleteProductsById);


module.exports = productRouter;

console.log("productRouter  is working");