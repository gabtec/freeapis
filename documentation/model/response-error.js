module.exports = {
  properties: {
    message: {
      type: "string",
    },
    statusCode: {
      type: "integer",
    },
    statusText: {
      type: "string",
    },
    type: {
      type: "String",
      default: "error",
    },
    details: {
      type: "string",
    },
  },
  example: {
    type: "error",
    statusCode: 400,
    statusText: "Bad Request",
    message: "missing required field",
    details: "'name' field is required",
  },
};
