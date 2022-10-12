module.exports = {
  get: {
    tags: ["/portugal"],
    summary: "Get a single portuguese city by code",
    description: "Returns a single city object",
    parameters: [
      {
        name: "code",
        in: "path",
        description: "The city code",
        required: false,
        schema: {
          type: "integer",
          format: "int64",
        },
      },
    ],
    responses: {
      200: {
        summary: "Returns a single city object",
        description: "Returns a single city object",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Concelho",
            },
            example: {
              cod: 1003,
              nome: "Ansião",
              distrito: 10,
            },
          },
        },
      },
    },
  },
};
