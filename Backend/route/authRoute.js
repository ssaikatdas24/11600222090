const express = require("express");
const { authenticate } = require("../controller/authController");

const router = express.Router();
router.post("/", authenticate);

module.exports = router;
