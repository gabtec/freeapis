const pkg = require("../../../package.json");

module.exports = {
  getInfos,
};

// GET /v1/infos
function getInfos(req, res, next) {
  return res.json({
    api: "Gabtec's FreeAPI",
    version: pkg.version,
  });
}
