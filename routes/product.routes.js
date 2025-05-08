const express = require('express');
const productRouter = express.Router();

//loading the middleware 
const checkLogin = require("../middleware/auth");
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
productRouter.post("/add",checkLogin,uploadObj.single('pAvatar'),productController.addProduct);
//getting all products from the Database.
productRouter.get("/all",checkLogin, productController.viewAllProducts);
//getting specific product from the database depends on product_id
productRouter.get("/show/:pid",checkLogin, productController.viewProductById);
//Updating pre existing products from the Database.
productRouter.put("/update/:pid", checkLogin,productController.updateProductsById);
//deleting exisiting products from the Database.
productRouter.delete("/delete/:pid",checkLogin, productController.deleteProductsById);


module.exports = productRouter;

console.log("productRouter  is working");