const express = require("express");
const router = express.Router();

const CitiesController = require("./cities.controller.js");

// GET /v1/portugal/concelhos?distrito=distritoX
router.get("/", CitiesController.getCitiesByDistrict);
// GET /v1/portugal/concelhos/:cod
router.get("/:cod", CitiesController.getCityByCode);

module.exports = router;
