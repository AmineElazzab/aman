const express = require('express');
const router = express.Router();
const {
    CreatUser,
    AuthUser,
}= require("../auth/auth.controller")

router.post("/register", CreatUser);
router.post("/login", AuthUser);

module.exports = router;
