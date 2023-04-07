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
const multer = require('multer')
const {auth} = require('../middleware/jwt.middleware')


//multer configuration
const storage = multer.diskStorage({
 
     

        destination: function (req, file, cb) {
            cb(null, 'src/uploads/'); // define the destination folder for uploaded files
    
        },
    
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            // cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop()) // generate unique file name
            const fileName =  file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop();// generate unique file name
    
            const filePath = fileName.replace(/\\/g, "/"); // enlever le backslash dans le nom de fichier
    
            cb(null, filePath);
        }
    
    });
const upload = multer({ storage: storage }).single('file');


router.get("/getProducts", GetProducts);
router.get("/getProductById/:id", GetProductById);
router.post("/addProduct", upload, AddProduct);
router.get("/getProductsByCategory/:id", GetProductsByCategory);
router.put("/updateProduct/:id",auth, UpdateProduct);
router.delete("/deleteProduct/:id", DeleteProduct);

module.exports = router;