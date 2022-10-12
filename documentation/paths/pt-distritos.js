module.exports = {
  get: {
    tags: ["/portugal"],
    summary: "Get the list of all portuguese districts",
    description:
      "Get the list of all portuguese districts. If a '?listar=...' query is used, the list will show just the districts name, or abreviation, or codes",
    parameters: [
      {
        name: "listar",
        in: "query",
        description: "How to filter the list",
        required: false,
        schema: {
          type: "string",
          oneOf: ["nome", "abrev", "cod"],
        },
        example: ["nome", "abrev", "cod"],
      },
    ],
    responses: {
      200: {
        summary: "The list of all portuguese districts",
        description: "An array with the list of all portuguese districts",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Distritos",
            },
          },
        },
      },
    },
  },
};
