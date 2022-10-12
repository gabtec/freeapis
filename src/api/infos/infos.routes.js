const express = require("express");
const router = express.Router();

const InfosController = require("./infos.controller.js");

// GET /v1/infos
router.get("/", InfosController.getInfos);

module.exports = router;
