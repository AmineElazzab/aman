const User = require('../user/user.model');
const Order = require('./order.model');
const asyncHandler = require('express-async-handler');

//get all orders
const GetOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({});
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
    const order = await Order.find({ user: req.params.id });
    if (order) {
        res.json(order);
    }
    else {
        res.status(404);
        throw new Error('Order not found');
    }
}
);

//add order 
const AddOrder = asyncHandler(async (req, res) => {
    
})