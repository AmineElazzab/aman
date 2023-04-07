const express = require('express');
const router = express.Router();
const {
    AddAddress,
    GetAllAddresses,
    // GetAddressById,
    GetAddressByUserId,
    UpdateAddress,
    DeleteAddress
}= require("./address.controller");
const {auth} = require ('../middleware/jwt.middleware')


router.post("/addAddress", auth ,AddAddress);
router.get("/getAllAddresses", GetAllAddresses);
// router.get("/getAddressById/:id",auth, GetAddressById);
router.get("/getAddressByUserId",auth, GetAddressByUserId);
router.put("/updateAddress/:id",auth, UpdateAddress);
router.delete("/deleteAddress/:id",auth, DeleteAddress);

module.exports = router;
