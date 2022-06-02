require("colors");
const http = require("http");
const api = require("./api.js");

const PORT_IN_USE_ERROR_CODE = 4;
const PORT = process.env.API_SRV_PORT || 4000;
const VERSION = require("../package.json").version;

const banner = require("./assets/banner.js");
banner.print("v" + VERSION);

const server = http.createServer(api).listen(PORT);

server.on("error", handleListenError);
server.on("listening", handleSuccess);

function handleSuccess() {
  console.log(`FreeAPI's server, listening on port ${PORT}.`.green);
}

function handleListenError(err) {
  // console.log("on error");
  if (err.code == "EADDRINUSE") {
    console.log(
      `[ServerError] Selected PORT "${PORT}" is in use. Please select another one.`
        .red
    );
  } else {
    console.log(err);
  }
  server.close();
  process.exit(PORT_IN_USE_ERROR_CODE); // 4 is the code number i've defined to alert the cluster that this worker was stopped due to PORT in use
}
