module.exports = (root, server) => {
  return {
    swaggerDefinition: {
      info: {
        description: "API documentation",
        title: "Sentiment Analysis API",
        version: "1.0.0",
      },
      host: `${server}`,
      basePath: "/api/v1",
      produces: ["application/json"],
      schemes: ["http"],
    },
    basedir: root,
    files: ["./routes/*.js"],
  };
};
