const User = require('../client/user.model');
const Address = require("./address.model");
const asyncHandler = require('express-async-handler');


//add new address
const AddAddress = asyncHandler(async (req, res) => {
//     const userId = req.params.id
//     const adress = await User.findById(userId)
//     if (adress) {
//         const adresse = await Address.create({
//             user: req.userId,
//             address: req.body.address,
//             city: req.body.city,
//             state: req.body.state,
//             zip: req.body.zip
//         });
//         if (adresse) {
//             res.status(201).send({
//                 success: true,
//                 data: adresse

//             });
//         }
//         else {
//             res.status(400).send({
//                 success: false,
//                 message: "Invalid data"
//             });
//         }
//     }
//     else {
//         res.status(404).send({
//             success: false,
//             message: "User not found"
//         });

//     }
// }
// );

    const adresse = await Address.create({
        user: req.userId,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    });
    if (adresse) {
        res.status(201).send({
            success: true,
            data: adresse
        });
    }
    else {
        res.status(400).send({
            success: false,
            message: "Invalid data"
        });
    }
}
);

//get all addresses
const GetAllAddresses = asyncHandler(async (req, res) => {
    try {
        const addresses = await Address.find();
        res.status(200).send({
            success: true,
            count: addresses.length,
            data: addresses
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Server Error"
        });
    }
}
);

//get address by id
const GetAddressByUserId = asyncHandler(async (req, res) => {
    const adresse = await Address.find({ user : req.userId}).populate('user','fullName')
    if (adresse) {
        res.json(adresse);
    }
    else {
        res.status(404).send({
            success: false,
            message: "Address not found"
        });
    }
}
);

//update address
const UpdateAddress = asyncHandler(async (req, res) => {
    const {
        user_id,
        address,
        city,
        state,
        zip
    } = req.body;
    if (
        !user_id ||
        !address ||
        !city ||
        !state ||
        !zip
    ) {
        res.status(400);
        throw new Error('Please provide all fields');
    }

    const addres = await Address.findById(req.params.id);
    if (address) {
        address.user_id = user_id || address.user_id;
        address.address = address || address.address;
        address.city = city || address.city;
        address.state = state || address.state;
        address.zip = zip || address.zip;

        const updatedAddress = await addres.save();
        res.status(200).send({
            success: true,
            data: updatedAddress
        });
    }
    else {
        res.status(404).send({
            success: false,
            message: "Address not found"
        });
    }
}
);

//delete address
const DeleteAddress = asyncHandler(async (req, res) => {
    try {
        const address = await Address.findById(req.params.id);
        if (!address) {
            res.status(404).send({
                success: false,
                message: "Address not found"
            });
        }
        await address.remove();
        res.status(200).send({
            success: true,
            message: "Address deleted successfully"
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Server Error"
        });
    }
}
);

module.exports = {
    AddAddress,
    GetAllAddresses,
    // GetAddressById,
    GetAddressByUserId,
    UpdateAddress,
    DeleteAddress
};

