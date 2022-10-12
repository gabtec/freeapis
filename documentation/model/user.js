module.exports = {
  properties: {
    id: {
      type: "integer",
      format: "int64",
    },
    name: {
      type: "string",
      required: true,
    },
    role: {
      type: "string",
      required: true,
      oneOf: ["candidate", "interviewer"],
    },
  },
  example: {
    id: 1,
    name: "John Doe",
    role: "candidate",
  },
};
