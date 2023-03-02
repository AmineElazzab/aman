const Admin = require('./admin.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');


//register new admin
const CreatAdmin = asyncHandler(async (req, res) => {
    const {
        fullname,
        email,
        password,
    } = req.body;
    if (
        !fullname ||
        !email ||
        !password
    ) {
        res.status(400);
        throw new Error('Please provide all fields');
    }

    //check if admin exists
    const adminExists= await Admin.findOne({email});
    if(adminExists){
        res.status(400);
        throw new Error('Admin already exists');
    }

    //hach password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create admin

    const admin = await Admin.create({
        fullname,
        email,
        password: hashedPassword
    });

    if(admin){
        res.status(201).json({
            _id: admin._id,
            fullname: admin.fullname,
            email: admin.email,
            token: generateToken(admin._id),
            message: "Admin created successfully"
        });
    }
    else{
        res.status(400);
        throw new Error('Invalid admin data');
    }
});

//login admin
const LoginAdmin = asyncHandler(async (req, res) => {
    const {
        email,
        password
    } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error('Please provide all fields');
    }

    //check for admin email
    const admin = await Admin.findOne({email});
    if(!admin){
        res.status(400);
        throw new Error('Admin does not exist');
    }
    //check for password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        res.status(400);
        throw new Error('Password does not match');
    }

    if (admin &&
        (await bcrypt.compare(password, admin.password))) {
        res.status(200).json({
            _id: admin._id,
            fullname: admin.fullname,
            email: admin.email,
            token: generateToken(admin._id),
            message: "Admin logged in successfully"
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid email or password');
    }
});


//Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}

module.exports = {CreatAdmin, LoginAdmin};