const express = require("express");
const router = express.Router();
// const { registerDelegate } = require("../controllers/registrationController");
const { registerUser } = require("../controllers/registrationController");

router.post("/register", registerUser);

module.exports = router;
