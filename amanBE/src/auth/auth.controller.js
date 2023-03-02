const User = require('../client/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');


//register new user
const CreatUser = asyncHandler(async (req, res) => {
    const {
        fullName,
        email,
        password,
        address,
        city
    } = req.body;
    if (
        !fullName ||
        !email ||
        !password ||
        !address ||
        !city
    ) {
        res.status(400);
        throw new Error('Please provide all fields');
    }

    //check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    //hach password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const user = await User.create({
        fullName,
        email,
        password: hashedPassword,
        address,
        city
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            address: user.address,
            city: user.city,
            token: generateToken(user._id),
            message: "User created successfully"
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

//login user
const AuthUser = asyncHandler(async (req, res) => {
    const {
        email,
        password
    } = req.body;

    //check for user email
    const user = await User.findOne({ email });
    if (!user) {
        res.status(400);
        throw new Error('User does not exist');
    }

    //check for password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(400);
        throw new Error('Invalid credentials');
    }

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            address: user.address,
            city: user.city,
            token: generateToken(user._id),
            message: "User logged in successfully"
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

//get user by id
const GetUserById = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});

//get all users
const GetAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
}
);

//Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}

module.exports = {
    CreatUser,
    AuthUser,
    GetUserById,
    GetAllUsers
}


