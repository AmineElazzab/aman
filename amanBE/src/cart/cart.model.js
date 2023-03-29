const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const cartSchema = mongoose.Schema(
    {
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
        quantity:
        {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
);


cartSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Cart', cartSchema);