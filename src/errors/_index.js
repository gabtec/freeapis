const AuthenticationError = require("./AuthenticationError.js");
const DatabaseError = require("./DatabaseError.js");
const PermissionsError = require("./PermissionsError.js");
const ValidationError = require("./ValidationError.js");
const RouteNotFoundError = require("./RouteNotFoundError.js");

module.exports = {
  AuthenticationError,
  DatabaseError,
  PermissionsError,
  ValidationError,
  RouteNotFoundError,
};
