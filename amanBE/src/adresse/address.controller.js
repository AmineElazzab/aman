const User = require('../client/user.model');
const Address = require("./address.model");
const asyncHandler = require('express-async-handler');

//add Address by user id
// const AddAddress = asyncHandler(async (req, res) => {
//     try {
//         const {
//             user_id,
//             address,
//             city,
//             state,
//             zip
//         } = req.body;

//         if (
//             !user_id ||
//             !address ||
//             !city ||
//             !state ||
//             !zip
//         ) {
//             res.status(400);
//             throw new Error('Please fill all fields');
//         }
//         // const addressExists = await Address.findOne({ address });
//         // if (addressExists) {
//         //     res.status(400);
//         //     throw new Error('Address already exists');
//         // }
//         const newaddress = new Address({
//             user_id,
//             address,
//             city,
//             state,
//             zip
//         });
//         await newaddress.save();
//         res.status(200).send({
//             success: true,
//             message: "Address added successfully"
//         });
//     }
//     catch (error) {
//         res.status(500).send({
//             success: false,
//             message: error.message
//         });
//     }
// }
// );



//create new adresse bu user_id
const AddAddress = asyncHandler(async (req, res) => {

    const {
        address,
        city,
        state,
        zip
    } = req.body;

    if (
        !address ||
        !city ||
        !state ||
        !zip
    ) {
        res.status(400);
        throw new Error('Please fill all fields');
    }
    const newAddress = new Address({
        address,
        city,
        state,
        zip,
        user: req.user_id,
    });
    try {
        await newAddress.save();

        const populatedAddress = await Address.findById(
            newAddress._id
        ).populate("user");

        res.status(201).json({
            id:
                populatedAddress._id,
            address:
                populatedAddress.address,
            city:
                populatedAddress.city,
            state:
                populatedAddress.state,
            zip:
                populatedAddress.zip,
            user:
                populatedAddress.user,
        });
    } catch (error) {
        res.status(400);
        throw new Error("Invalid address data");
    }
});



//     try {
//         // const user = await User.findById(req.params.id);
//         // if (!user) {
//         //     res.status(404).send({
//         //         success: false,
//         //         message: "User not found"
//         //     });
//         // }
//         const newaddress = new Address({
//             address,
//             city,
//             state,
//             zip,
//             user: req.user_id,
//         });

//         //chek if the same user has already create the same adresse befor
//         const ExistingAdresse = await Address.findOne({
//             user: req.user_id,
//             address: req.body.address,

//         });
//         if (ExistingAdresse) {
//             res.status(400).send({
//                 success: false,
//                 message: "You have already created this adresse"
//             });
//         }

//         await newaddress.save();
//         res.status(200).send({
//             success: true,
//             address: req.body.address,
//             user: req.user_id,
//             // name: req.user_fullname,
//             // email: req.user_email


//             message: "Address added successfully"
//         });
//     }
//     catch (error) {
//         res.status(500).send({
//             success: false,
//             message: error.message
//         });
//     }
// }
// );


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
    const GetAddressById = asyncHandler(async (req, res) => {
        try {
            const address = await Address.findById(req.params.id);
            if (!address) {
                res.status(404).send({
                    success: false,
                    message: "Address not found"
                });
            }
            res.status(200).send({
                success: true,
                data: address
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

    //get address by user id
    const GetAddressByUserId = asyncHandler(async (req, res) => {
        try {
            const address = await Address.find({ user_id: req.params.id });
            if (!address) {
                res.status(404).send({
                    success: false,
                    message: "Address not found"
                });
            }
            res.status(200).send({
                success: true,
                data: address
            });
        }
        catch (error) {
            res.status(500).send({
                success: false,
                message: "Server Error"
            });
        }

    });

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
        GetAddressById,
        GetAddressByUserId,
        UpdateAddress,
        DeleteAddress
    };

