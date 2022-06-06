const express = require("express");
const router = express.Router();

const HolidaysController = require("./holidays.controller.js");

// GET /v1/calendario/feriados/:ano
router.get("/:ano", HolidaysController.getHolidays);

module.exports = router;
