const express = require('express');
const router = express.Router();
const {
    GetCartItems,
    AddToCart,
    DeleteCartItem
} = require("./cart.controller")

const { auth } = require('../middleware/jwt.middleware')


router.get("/getCartItems", auth, GetCartItems);
router.post("/addToCart/:id", auth, AddToCart);
router.delete("/deleteCartItem/:id", DeleteCartItem);

module.exports = router;