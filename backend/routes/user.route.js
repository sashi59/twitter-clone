const { signupUser } = require("../controller/auth.controller");
const User = require("../model/user.model");
const express = require("express");
const router = express.Router();

router.post('/signup', signupUser);

module.exports = router;
