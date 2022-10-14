module.exports = {
  get: {
    tags: ["/calendario"],
    summary: "Get the portuguese hollidays for a given year",
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
        summary: "The report with leap year info",
        description: "A json report with the year and if is leap year or not",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/LeapYear",
            },
            example: {
              year: 2000,
              isLeapYear: true,
            },
          },
        },
      },
    },
  },
};
