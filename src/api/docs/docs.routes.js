const express = require("express");
const router = express.Router();

const DocsController = require("./docs.controller.js");

// GET /v1/docs
router.get("/", DocsController.getDocs);

module.exports = router;
