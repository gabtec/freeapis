const pkg = require("../../../package.json");

module.exports = {
  getDocs,
};

// GET /v1/docs
function getDocs(req, res, next) {
  return res.json({
    api: "Gabtec's FreeAPI",
    version: pkg.version,
  });
}
