const express = require('express');
const router = express.Router();
const {
    GetUsers,
    GetUserById,
    GetUserProfile,
    UpdateUser,
}= require("./user.controller")

router.get("/getUsers", GetUsers);
router.get("/getUserById/:id", GetUserById);
router.get("/getUserProfile", GetUserProfile);
router.put("/updateUser", UpdateUser);

module.exports = router;