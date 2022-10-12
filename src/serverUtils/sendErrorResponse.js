const codeString = require("http-status");

function sendErrorResponse(res, error) {
  if (!error.code) error.code = 500;

  return res.status(error.code).json({
    type: error.name || "Unspecified Error",
    statusCode: error.code,
    statusText: codeString[error.code],
    message: error.message,
    details:
      process.env.NODE_ENV !== "development" ? error.stack : "classified",
  });
}

module.exports = sendErrorResponse;
