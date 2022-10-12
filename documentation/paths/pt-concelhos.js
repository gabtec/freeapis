module.exports = {
  get: {
    tags: ["/portugal"],
    summary: "Get the list of all cities of a given portuguese district",
    description:
      "Get the list of all portuguese districts. If a '?listar=...' query is used, the list will show just the districts name, or abreviation, or codes",
    parameters: [
      {
        name: "distrito",
        in: "query",
        description: "The district to list cities from",
        required: false,
        schema: {
          type: "string",
        },
        example: "leiria",
      },
    ],
    responses: {
      200: {
        summary: "The list of all cities of a given portuguese district",
        description:
          "An array with the list of all cities of a given portuguese district",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Concelhos",
            },
          },
        },
      },
    },
  },
};
