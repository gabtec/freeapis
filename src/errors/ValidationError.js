class ValidationError extends Error {
  constructor(error) {
    // using Joi syntax
    super(error.details[0].message);
    this.name = this.constructor.name;
    this.code = 400;
    this.details = error.details[0];
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ValidationError;

/**
 * Joi error example
 *
 * {
 *  name: 'ValidationError',
 *  isJoi: true,
 *  details: [
 *    { message, path, type, context: { key, label, value}, annotate() }
 *  ]
 * }
 */
