module.exports = {
  get: {
    tags: ["/infos"], // its kind of a grouping word for all routes
    summary: "API infos",
    description: "Some simple api infos, like version",
    operationId: "showInfos",
    responses: {
      200: {
        summary: "Some Api infos",
        content: {
          "application/json": {
            schema: {
              properties: {
                api: {
                  type: "string",
                },
                version: {
                  type: "string",
                },
              },
              example: {
                api: "Gabtec's FreeAPI",
                version: "1.0.6",
              },
            },
          },
        },
      },
    },
  },
};
