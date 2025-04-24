const express = require("express");
//load the controller
const userController = require("../controller/user.controller");
const userRouter = express.Router();

userRouter.post("/signup",userController.createUser);
userRouter.post("/signin",userController.loginUser);

module.exports = userRouter;
console.log("user-router working")