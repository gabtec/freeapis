const express = require("express");
const router = express.Router();

const LeapController = require("./leap.controller.js");

// GET /calendario/bissexto/:ano
router.get("/:ano", LeapController.isBissexto);

module.exports = router;
