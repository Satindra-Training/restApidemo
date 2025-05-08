const orderController = require("../controller/order.controller");
const express = require('express');

const orderRouter = express.Router();

orderRouter.post("/:uid/:pid",orderController.placeOrder);
orderRouter.get("/:oid",orderController.viewOrder);

module.exports = orderRouter;
console.log("order router is working");
