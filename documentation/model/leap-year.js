module.exports = {
  properties: {
    year: {
      type: "integer",
      format: "int64",
      required: true,
    },
    isLeapYear: {
      type: "boolean",
      required: true,
    },
  },
  example: {
    year: 2000,
    isLeapYear: true,
  },
};
