require("colors");

const {
  DatabaseError,
  AuthenticationError,
  PermissionsError,
  ValidationError,
} = require("../errors/_index.js");

const sendErrorResponse = require("./sendErrorResponse.js");

function catchAndParseErrors(error, req, res, next) {
  if (process.env.NODE_ENV !== "test") {
    console.log(`[${error.name}]:`.red, error.message);
  }

  if (error instanceof DatabaseError) {
    return sendErrorResponse(res, error);
  }
  if (error instanceof AuthenticationError) {
    return sendErrorResponse(res, error);
  }
  if (error instanceof PermissionsError) {
    return sendErrorResponse(res, error);
  }
  if (error instanceof ValidationError) {
    return sendErrorResponse(res, error);
  }

  // any other
  console.log(`[GlobalError]:`.red, "...catched.");
  console.log(error);
  return sendErrorResponse(res, error);
}

module.exports = catchAndParseErrors;
