const express = require('express');
const router = express.Router();
const {
        GetProducts,
        GetProductById,
        GetProductsByCategory,
        AddProduct,
        UpdateProduct,
        DeleteProduct,
}= require("./product.controller")

router.get("/getProducts", GetProducts);
router.get("/getProductById/:id", GetProductById);
router.get("/getProductsByCategory/:id", GetProductsByCategory);
router.post("/addProduct", AddProduct);
router.put("/updateProduct/:id", UpdateProduct);
router.delete("/deleteProduct/:id", DeleteProduct);

module.exports = router;