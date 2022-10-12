module.exports = {
  get: {
    tags: ["/portugal"],
    summary: "Get a single portuguese districts by code",
    description: "Returns a single district object",
    parameters: [
      {
        name: "code",
        in: "path",
        description: "The district code",
        required: false,
        schema: {
          type: "integer",
          format: "int64",
        },
      },
    ],
    responses: {
      200: {
        summary: "Returns a single district object",
        description: "Returns a single district object",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/District",
            },
            example: {
              cod: 10,
              abrev: "LRA",
              nome: "Leiria",
            },
          },
        },
      },
    },
  },
};
