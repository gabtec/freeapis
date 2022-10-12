class PermissionsError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
    this.code = 403;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = PermissionsError;
