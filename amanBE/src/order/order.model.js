const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const orderSchema = mongoose.Schema(
    {
        // orderItems:
        // {
        //     type: Array,
        // },
        user:
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        product:
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Product',
            required: true
        },
        cart:
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Cart',
            required: true
        },
        // quantity:
        // {
        //     type: Number,
        //     required: true
        // },
        // shippingAddress:
        // {
        //     type: String,
        //     required: true
        // },
        // city:{
        //     type: String,
        //     required: true
        // },
        // postalCode:{
        //     type: String,
        //     required: true
        // },
       
    },
    {
        timestamps: true
    }
);

orderSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Order', orderSchema);