const hol = {
  "Ano Novo": "01-01",
  "Dia da Liberdade": "04-25",
  "Dia do Trabalhador": "05-01",
  "Dia de Portugal": "06-10",
  "Assunção de Nossa Senhora": "08-15",
  "Implantação da República": "10-05",
  "Dia de Todos-os-Santos": "11-01",
  "Restauração da Independência": "12-01",
  "Imaculada Conceição": "12-08",
  Natal: "12-25",
};

function getFixedHolidays(year) {
  const aux = {};
  const keys = Object.keys(hol);
  const loops = keys.length;

  for (let i = 0; i < loops; i++) {
    aux[keys[i]] = year + "-" + hol[keys[i]];
  }

  return aux;
}

module.exports = getFixedHolidays;
