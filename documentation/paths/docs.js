module.exports = {
  get: {
    tags: ["/docs"], // its kind of a grouping word for all routes
    summary: "API documentation",
    description: "Swagger Styled API Documentation",
    operationId: "showDocs",
    responses: {
      200: {
        description: "The docs page",
        content: {
          "text/html": {},
        },
      },
    },
  },
};
