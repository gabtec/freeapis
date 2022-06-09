const districts = require("./districts.data.js");

module.exports = {
  getDistricts,
  getDistrictsByCode,
};

// GET /v1/portugal/distritos
// GET /v1/portugal/distritos?listar:nome|cod|abrev
function getDistricts(req, res, next) {
  if (req.query && req.query.listar) {
    const filter = req.query.listar;

    if (!["cod", "nome", "abrev"].includes(filter))
      return res
        .status(400)
        .json({ errorMsg: "Parâmetro para listar inválido." });

    res.status(200).json(
      districts.map((item) => {
        return item[filter];
      })
    );
  } else {
    res.status(200).json(districts);
  }
}

// GET /v1/portugal/distritos/:id
function getDistrictsByCode(req, res, next) {
  const codigo = Number(req.params.id);

  if (!codigo)
    return res.status(400).json({
      errorMsg: "Deve indicar um código numérico.",
    });

  let distrito;

  const loops = districts.length;

  for (let i = 0; i < loops; i++) {
    if (districts[i].cod === codigo) {
      distrito = districts[i];
      break;
    }
  }

  distrito
    ? res.status(200).json(distrito)
    : res.status(404).json({
        errorMsg: `Distrito com o código "${codigo}" não encontrado.`,
      });
}
