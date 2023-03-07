const express = require('express');
const router = express.Router();
const {
        GetCategories,
        GetCategoryById,
        AddCategory,
        UpdateCategory,
        DeleteCategory,
} = require("./category.controller")




router.get("/getCategories", GetCategories);
router.get("/getCategoryById/:id", GetCategoryById);
router.post("/addCategory", AddCategory);
router.put("/updateCategory/:id", UpdateCategory);
router.delete("/deleteCategory/:id", DeleteCategory);

module.exports = router;
//

