const express = require("express");
const { getLogs } = require("../controller/logController");

const router = express.Router();
router.get("/", getLogs);

module.exports = router;
