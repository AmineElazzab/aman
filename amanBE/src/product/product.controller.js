const Category = require('../category/category.model');
const Product = require('./product.model');
const asyncHandler = require('express-async-handler');


//get all products
const GetProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}
);


//get product by id
const GetProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404);
        throw new Error('Product not found');
    }
}
);

//get products by category
const GetProductsByCategory = asyncHandler(async (req, res) => {
    const products = await Product.find({ category: req.params.id });
    if (products) {
        res.json(products);
    }
    else {
        res.status(404);
        throw new Error('Products not found');
    }
}
);

//add product
const AddProduct = asyncHandler(async (req, res) => {
    try {
        const {
            name,
            price,
            // image,
            description,
            category_id,
            countInStock
        } = req.body;

        if (
            !name ||
            !price ||
            // !image ||
            !description ||
            !category_id ||
            !countInStock
        ) {
            res.status(400);
            throw new Error('Please provide all fields');
        }

        const newproduct = new
            Product({
                name,
                price,
                // image,
                description,
                category: category_id,
                countInStock
            });
        const product = await Product.findOne({
            name,
            price,
            // image,
            description,
            category_id,
            countInStock
        });
        if (product) {
            res.status(400).send({
                success: false,
                message: "Product already exists"
            });
        }
        await newproduct.save();
        res.status(201).send({
            success: true,
            message: "Product added successfully"
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
}
);



//update product
const UpdateProduct = asyncHandler(async (req, res) => {
    const {
        name,
        price,
        image,
        description,
        category,
        countInStock
    } = req.body;
    if (
        !name ||
        !price ||
        !image ||
        !description ||
        !category ||
        !countInStock
    ) {
        res.status(400);
        throw new Error('Please provide all fields');
    }

    const product = await Product.findById(req.params.id);

    if (product) {
        product.name = name;
        product.price = price;
        product.image = image;
        product.description = description;
        product.category = category;
        product.countInStock = countInStock;

        const updatedProduct = await product.save();
        res.json({
            _id: updatedProduct._id,
            name: updatedProduct.name,
            price: updatedProduct.price,
            image: updatedProduct.image,
            description: updatedProduct.description,
            category: updatedProduct.category,
            countInStock: updatedProduct.countInStock,
            message: "Product updated successfully"
        });
    }
    else {
        res.status(404);
        throw new Error('Product not found');
    }
}
);

//delete product
const DeleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndDelete
        (req.params.id);
    if (product) {
        res.json({
            message: "Product deleted successfully"
        });
    }
    else {
        res.status(404);
        throw new Error('Product not found');
    }
}
);

module.exports = {
    GetProducts,
    GetProductById,
    GetProductsByCategory,
    AddProduct,
    UpdateProduct,
    DeleteProduct
};




