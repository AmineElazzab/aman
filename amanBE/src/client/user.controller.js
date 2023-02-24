const asyncHandler = require('express-async-handler');
const User = require('../client/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
    const {
        email,
        password
    } =  req.body;
try{
    if(
        !email ||
        !password
    ){
        res.status(400);
        throw new Error('Please provide an email and password');
    }

    const existingUser = await User.findOne({ email});

if (!
    existingUser
) {
    res.status(401);
    throw new Error('Invalid email or password');
}

const isMatch = await bcrypt.compare(password, existingUser.password);

if (!
    isMatch
) {
    res.status(401);
    throw new Error('Invalid email or password');
}

const token = jwt.sign({
    id: existingUser._id
}, process.env.JWT_SECRET, {
    expiresIn: '30d'
});

res.json({
    _id: existingUser._id,
    name: existingUser.name,
    email: existingUser.email,
    isAdmin: existingUser.isAdmin,
    token
});
}
catch(error){
    res.status(400);
    throw new Error(error.message);
}
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
    const {
        firstname,
        lastname,
        email,
        password,
        address,
        city
    } =  req.body;

if(
    !firstname ||
    !lastname ||
    !email ||
    !password ||
    !address ||
    !city
){
    res.status(400);
    throw new Error('Please provide all fields');
}

//check if user already exists
const userexist = await bcrypt
