const feriadosFixos = require("./holidays.fixed");
const engine = require("./holidays.engine.js");

module.exports = {
  getHolidays,
};

function sortHolidays(h) {
  const keys = Object.keys(h);
  const values = Object.values(h);
  const sortedValues = Object.values(h).sort();

  let aux = {};

  const loops = keys.length;

  for (let i = 0; i < loops; i++) {
    aux[values[i]] = keys[i];
  }

  const result = {};

  for (let i = 0; i < loops; i++) {
    const idx = values.indexOf(sortedValues[i]);
    result[keys[idx]] = sortedValues[i];
  }
  return result;
}

// GET /v1/calendario/feriados/:ano
function getHolidays(req, res, next) {
  const year = Number(req.params.ano);

  if (!year)
    return res.status(400).json({
      errorMsg: "Deve indicar o ano da pesquisa.",
    });

  const mobileHolidays = {
    Carvaval: engine.getCarnival(year),
    "Sexta-Feira Santa": engine.getGoodFriday(year),
    Páscoa: engine.getEaster(year),
    "Corpo de Deus": engine.getCorpusChristi(year),
  };
  const holidays = {
    ...feriadosFixos(year),
    ...mobileHolidays,
  };

  // return res.status(200).json(holidays);
  return res.status(200).json(sortHolidays(holidays));
}
