class AuthenticationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
    this.code = 401;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AuthenticationError;
