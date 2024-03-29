const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const addressSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            // required: true
        },
        address:
        {
            type: String,
            required: true
        },
        city:
        {
            type: String,
            required: true
        },
        state:
        {
            type: String,
            required: true
        },
        zip:
        {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    },
)

addressSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Address', addressSchema);