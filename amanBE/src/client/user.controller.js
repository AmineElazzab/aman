const asyncHandler = require('express-async-handler');
const User = require('../client/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//get user by id
const GetUserById = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
 });

//get user profile
const GetUserProfile = asyncHandler(async (req, res) => {
    res.status( 200).json(req.user);
});

//update user profile
const UpdateUser = asyncHandler(async (req, res) => {
})


//get all users
const GetUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
})


module.exports = {
    GetUsers,
    GetUserById,
    GetUserProfile,
    UpdateUser,
}
