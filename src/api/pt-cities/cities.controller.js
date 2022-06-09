const cities = require("./cities.data");
const utils = require("../../utils/index");

module.exports = {
  getCitiesByDistrict,
  getCityByCode,
};

// GET /v1/portugal/concelhos?distrito=nome
function getCitiesByDistrict(req, res, next) {
  const district = req.query.distrito;

  if (!district) {
    return res
      .status(400)
      .json({ message: "Deve indicar o nome do distrito!" });
  }

  if (typeof district !== "string")
    return res.status(400).json({ errorMsg: "Nome do distrito inválido!" });

  const dist = utils.ensureUpperFirst(district);
  const results = cities[dist] || [];

  const response = {};
  response[district] = results.length > 0 ? results : "Distrito desconhecido!";
  // if (results.length < 1)
  //   return res.status(400).json({
  //     errorMsg: `Não foi possível listar os concelhos de ${district}!`,
  //   });

  // const result = city.map((it) => it.desc);

  // return results.length > 0
  //   ? res.status(200).json(results)
  //   : res.status(400).json({ errorMsg: `Concelho ${result} não encontrado!` });
  res.status(200).json(response);
}

// GET /v1/portugal/concelhos/:cod
function getCityByCode(req, res, next) {
  const codigo = Number(req.params.cod);
  if (!codigo)
    return res.status(400).json({
      errorMsg: "Deve indicar um código numérico.",
    });

  let concelho;

  for (const key in cities) {
    const loops = cities[key].length;

    for (let i = 0; i < loops; i++) {
      if (cities[key][i].cod === codigo) {
        concelho = cities[key][i];
        break;
      }
    }
  }

  concelho = concelho ? concelho : {};
  res.status(200).json(concelho);
}
