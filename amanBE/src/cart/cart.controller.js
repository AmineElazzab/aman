const Product = require('../product/product.model');
const User = require('../client/user.model');
const Cart = require('./cart.model');
const asyncHandler = require('express-async-handler');

//get cart by user id
const GetCartItems = asyncHandler(async (req, res) => {
    const cart = await Cart.find({ user: req.userId }).populate('product')
    if (cart) {
        res.json(cart);
    }
    else {
        res.status(404);
        throw new Error('Cart not found');
    }
}
);


//add product to cart 
// const AddToCart = asyncHandler(async (req, res) => {
//     try{
//         const {productId, quantity} = req.body;
//         const cartItem = await Cart.findOne({user: req.user._id, product: productId});
//         if(cartItem){
//             const updatedQuantity = cartItem.quantity + Number(quantity);
//             cartItem.quantity = updatedQuantity;
//             await cartItem.save();
//             res.json(cartItem);
//         }
//         else{
//             const cart = await Cart.create({
//                 user: req.user._id,
//                 product: productId,
//                 quantity: quantity
//             });
//             res.json(cart);
//         }
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// );

const AddToCart = asyncHandler(async (req, res) => {
    // const
        // { quantity } = req.body
    const productId = req.params.id;
    const product = await Product.findById(productId)
    if (product) {
        const cart = await Cart.create({
            user: req.userId,
            product: productId,
            // quantity: quantity
        });
        res.json(cart);
    }
    else {
        res.status(404);
        throw new Error('Product not found');
    }
}
);
//delete cart item
const DeleteCartItem = asyncHandler(async (req, res) => {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    if (cart) {
        res.json(cart);
    }
    else {
        res.status(404);
        throw new Error('Cart not found');
    }
}
);

module.exports = {
    GetCartItems,
    AddToCart,
    DeleteCartItem
};

