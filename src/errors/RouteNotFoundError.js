class RouteNotFoundError extends Error {
  constructor(details) {
    super("Route Not Found!");
    this.name = this.constructor.name;
    this.code = 404;
    this.stack = details;
  }
}

module.exports = RouteNotFoundError;
