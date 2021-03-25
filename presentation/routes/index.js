const express = require("express");
const router = express.Router();

const HomeRouter = require("./home");
const PostRouter = require("./post");
const UserRouter = require("./user");


router.use("/post", PostRouter)
router.use("/user", UserRouter)
router.use("/", HomeRouter)

module.exports = router;