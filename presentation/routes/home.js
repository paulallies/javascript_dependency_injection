const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
    res.json({ message: "Hello From Our Great API" })

})


module.exports = router;