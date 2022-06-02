const utils = require("../../utils/index.js");

module.exports = {
  isBissexto,
};

// GET /v1/calendario/bissexto/:ano
function isBissexto(req, res, next) {
  const year = Number(req.params.ano);

  if (!year)
    return res.status(400).json({
      errorMsg: "Deve indicar o ano da pesquisa.",
    });

  const result = utils.isLeapYear(year);

  return res.status(200).json({
    year: year,
    isLeapYear: result,
  });
}
