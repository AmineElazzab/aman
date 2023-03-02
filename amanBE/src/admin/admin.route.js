const express = require('express');
const router = express.Router();
const {
    CreatAdmin,
    LoginAdmin,
}= require("./admin.controller")

router.post("/register", CreatAdmin);
router.post("/login", LoginAdmin);

module.exports = router;