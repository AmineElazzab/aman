const express = require('express');
const router = express.Router();
const {
    GetOrders,
    GetOrderById,
    GetOrderByUserId,
    AddOrder,
    DeleteOrder
} = require("./order.controller")

const { auth } = require('../middleware/jwt.middleware')


router.post("/addOrder/:id", auth, AddOrder);
router.get("/getOrders", GetOrders);
router.get("/getOrderById/:id", auth, GetOrderById);
router.get("/getOrderByUserId",auth, GetOrderByUserId);
router.delete("/deleteOrder/:id", DeleteOrder);

module.exports = router;