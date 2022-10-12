module.exports = {
  properties: {
    resource: {
      type: "string",
    },
    resources: {
      type: "array",
    },
  },
  example: {
    resource: "users",
    resources: [
      { id: 1, name: "John" },
      { id: 2, name: "Marie" },
    ],
  },
};
