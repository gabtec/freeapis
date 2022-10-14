module.exports = {
  get: {
    tags: ["/calendario"],
    summary: "To check if a given year is leap year",
    description: "",
    parameters: [
      {
        name: "ano",
        in: "path",
        description: "The year to check",
        required: true,
        schema: {
          type: "integer",
          format: "int64",
        },
        example: 2022,
      },
    ],
    responses: {
      200: {
        summary: "The portuguese hollidays list",
        description: "The portuguese hollidays list, order by date",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Hollidays",
            },
            example: {
              "Ano Novo": "2022-01-01",
              Carvaval: "2022-03-01",
              "Sexta-Feira Santa": "2022-04-15",
              Páscoa: "2022-04-17",
              "Dia da Liberdade": "2022-04-25",
              "Dia do Trabalhador": "2022-05-01",
              "Dia de Portugal": "2022-06-10",
              "Corpo de Deus": "2022-06-16",
              "Assunção de Nossa Senhora": "2022-08-15",
              "Implantação da República": "2022-10-05",
              "Dia de Todos-os-Santos": "2022-11-01",
              "Restauração da Independência": "2022-12-01",
              "Imaculada Conceição": "2022-12-08",
              Natal: "2022-12-25",
            },
          },
        },
      },
    },
  },
};
