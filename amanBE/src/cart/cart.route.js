const express = require('express');
const router = express.Router();
const {
    GetCartItems,
    AddToCart,
    DeleteCartItem
} = require("./cart.controller")


router.get("/getCartItems", GetCartItems);
router.post("/addToCart", AddToCart);
router.delete("/deleteCartItem/:id", DeleteCartItem);

module.exports = router;