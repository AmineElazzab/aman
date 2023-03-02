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
