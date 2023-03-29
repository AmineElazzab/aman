const express = require('express');
const router = express.Router();
const {
    AddAddress,
    GetAllAddresses,
    GetAddressById,
    GetAddressByUserId,
    UpdateAddress,
    DeleteAddress
}= require("./address.controller")

router.post("/addAddress/:id", AddAddress);
router.get("/getAllAddresses", GetAllAddresses);
router.get("/getAddressById/:id", GetAddressById);
router.get("/getAddressByUserId/:id", GetAddressByUserId);
router.put("/updateAddress/:id", UpdateAddress);
router.delete("/deleteAddress/:id", DeleteAddress);

module.exports = router;
