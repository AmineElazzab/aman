const express = require("express");
const router = express.Router();

router.get('/:img', (req, res) => {
    console.log(req.params.img);
    res.sendFile(__dirname + "/uploads/" + req.params.img);
});

module.exports = router;