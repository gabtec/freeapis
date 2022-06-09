const express = require("express");
const router = express.Router();

const DistrictsController = require("./districts.controller.js");

// GET /v1/portugal/distritos
// GET /v1/portugal/distritos?listar=nome|cod|abrev
router.get("/", DistrictsController.getDistricts);
// GET /api/v1/portugal/distritos/:id
router.get("/:id", DistrictsController.getDistrictsByCode);

module.exports = router;
