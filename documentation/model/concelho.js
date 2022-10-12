module.exports = {
  properties: {
    cod: {
      type: "integer",
      required: true,
    },
    abrev: {
      type: "string",
      required: true,
    },
    nome: {
      type: "string",
      required: true,
    },
  },
  example: { cod: 10, abrev: "LRA", nome: "Leiria" },
};
