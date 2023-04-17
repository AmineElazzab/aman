const User = require('../client/user.model');
const Product = require('../product/product.model');
const Cart = require('../cart/cart.model');
const Order = require('./order.model');
const asyncHandler = require('express-async-handler');

//get all orders
const GetOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({})
        .populate('product')
        .populate('user');
    res.json(orders);
}
);

//get order by id
const GetOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        res.json(order);
    }
    else {
        res.status(404);
        throw new Error('Order not found');
    }
}
);

//get order by user id
const GetOrderByUserId = asyncHandler(async (req, res) => {
    try {
        const order = await Order.find({ user: req.userId })
            .populate('product')
            .populate('user');
        res.status(200).json(order);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}
);

//     const order = await Order.find({user : req.userId}).populate(
//         'product'
//     )
//     if (order) {
//         res.json(order);
//     }
//     else {
//         res.status(404);
//         throw new Error('Order not found');
//     }
// }
// );

//add order by user id and product id
const AddOrder = asyncHandler(async (req, res) => {
    const cartId = req.params.id;
    const cart = await Cart.findById(cartId)
    if (cart) {
        const order = await Order.create({
            user: req.userId,
            cart: cartId,
            product: cart.product,

        });
        res.json(order);
    }
    else {
        res.status(404);
        throw new Error('Cart not found');
    }
}
);

//delete order by id
const DeleteOrder = asyncHandler(async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (order) {
        res.json(order);
    }
    else {
        res.status(404);
        throw new Error('Order not found');
    }
}
);

module.exports = {
    GetOrders,
    GetOrderById,
    GetOrderByUserId,
    AddOrder,
    DeleteOrder
};
