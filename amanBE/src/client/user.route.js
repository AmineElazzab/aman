const express = require('express');
const router = express.Router();
const {
    GetUsers,
    GetUserById,
    GetUserProfile,
    UpdateUser,
}= require("./user.controller");

const {auth} = require('../middleware/jwt.middleware')

router.get("/getUsers", GetUsers);
router.get("/getUserById", auth, GetUserById);
router.get("/getUserProfile", GetUserProfile);
router.put("/updateUser", UpdateUser);

module.exports = router;