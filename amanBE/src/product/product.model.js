const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const productSchema = mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        price:
        {
            type: Number,
            required: true
        },
        image:
        {
            type: String,
            required: true
        },
        description:
        {
            type: String,
            required: true
        },
        category:
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Category',
            required: true
        },
        countInStock:
        {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
);

productSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Product', productSchema);