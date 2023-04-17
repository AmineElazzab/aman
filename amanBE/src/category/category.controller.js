const Category= require('./category.model')
const asyncHandler = require('express-async-handler')


//get all categories
const GetCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find({})
    res.json(categories)
}
);

//get category by id
const GetCategoryById = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id)
    if (category) {
        res.json(category)
    }
    else {
        res.status(404)
        throw new Error('Category not found')
    }
}
);

//add category 
const AddCategory = asyncHandler(async (req, res) => {
    try {
        const { name } = req.body
        const category = await Category.create({
            name,
        })
        if (category) {
            res.status(201).json({
                _id: category._id,
                name: category.name,
            })
        }
        else {
            res.status(400)
            throw new Error('Invalid category data')
        }
    }
    catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
}
);

//update category
const UpdateCategory = asyncHandler(async (req, res) => {
    try {
        const { name } = req.body
        const category = await Category.findByIdAndUpdate(req.params.id, {
            name,
        })
        if (category) {
            res.json(category)
        }
        else {
            res.status(404)
            throw new Error('Category not found')
        }
    }
    catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
}
);

//delete category
const DeleteCategory = asyncHandler(async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id)
    if (category) {
        res.json(category)
    }
    else {
        res.status(404)
        throw new Error('Category not found')
    }
}
);

module.exports = {
    GetCategories,
    GetCategoryById,
    AddCategory,
    UpdateCategory,
    DeleteCategory
}
