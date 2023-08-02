const express = require("express");
const router = express.Router();

const {welcome, createUser} = require("../controllers/user");

router.get("/", welcome);

router.post("/createUser", createUser);

module.exports = router;