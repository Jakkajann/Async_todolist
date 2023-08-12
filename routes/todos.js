const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
    res.send("Api home route");
});


module.exports = router;