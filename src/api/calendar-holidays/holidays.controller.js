const feriadosFixos = require("./holidays.fixed");
const engine = require("./holidays.engine.js");

module.exports = {
  getHolidays,
};

// GET /v1/calendario/feriados/:ano
function getHolidays(req, res, next) {
  const year = req.params.ano;

  const mobileHolidays = {
    Páscoa: engine.getEaster(year),
    "Sexta-Feira Santa": engine.getGoodFriday(year),
    "Corpo de Deus": engine.getCorpusChristi(year),
    Carvaval: engine.getCarnival(year),
  };
  const holidays = { ...feriadosFixos, ...mobileHolidays };

  return res.status(200).json(holidays);
}
