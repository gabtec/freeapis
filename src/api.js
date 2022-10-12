const express = require("express");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../documentation/openapi.js");
const serverUtils = require("./serverUtils/_index.js");
const { RouteNotFoundError } = require("./errors/_index.js");

/*
|------------------------------------------------------------
| Define 'app' object
|------------------------------------------------------------
|
| Don't forget 'module.exports = app' at the end of this file
|
*/
const app = express();

/*
|------------------------------------------------------------
| Middlewares
|------------------------------------------------------------
|
*/
app.use(cors());
app.use(compression());
app.use(helmet());
// replaces body-parser, and set req limit to avoid DDoS
app.use(express.json({ limit: "1kb" }));

/*
|--------------------------------------------------------------------------
|  ____                                        _        _   _             
| |  _ \  ___   ___ _   _ _ __ ___   ___ _ __ | |_ __ _| |_(_) ___  _ __  
| | | | |/ _ \ / __| | | | '_ ` _ \ / _ \ '_ \| __/ _` | __| |/ _ \| '_ \ 
| | |_| | (_) | (__| |_| | | | | | |  __/ | | | || (_| | |_| | (_) | | | |
| |____/ \___/ \___|\__,_|_| |_| |_|\___|_| |_|\__\__,_|\__|_|\___/|_| |_|
|                                                                         
|--------------------------------------------------------------------------
|
*/
const swaggerOptions = {
  explorer: true, // add a navbar search field
  // requestInterceptor: function (request) {
  //   request.headers.Origin = `http://localhost:4000`;
  //   return request;
  // },
};
app.use(
  "/v1/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, swaggerOptions)
);

/*
|------------------------------------------------------------
|     ____   ___  _   _ _____ _____ ____
|    |  _ \ / _ \| | | |_   _| ____/ ___|
|    | |_) | | | | | | | | | |  _| \___ \
|    |  _ <| |_| | |_| | | | | |___ ___) |
|    |_| \_\\___/ \___/  |_| |_____|____/
|------------------------------------------------------------
|
*/
// router handler modules
const InfosEndpoints = require("./api/infos/infos.routes");
const LeapYearEndpoints = require("./api/calendar-leap-year/leap.routes");
const HolidaysEndpoints = require("./api/calendar-holidays/holidays.routes");
const DistrictsEndpoints = require("./api/pt-districts/districts.routes");
const CitiesEndpoints = require("./api/pt-cities/cities.routes");
// const InstSaudeEndpoints = require("./api/saude-instituicoes/instituicoes.routes");

// ROUTES
app.use("/v1/infos", InfosEndpoints);
app.use("/v1/calendario/bissexto", LeapYearEndpoints);
app.use("/v1/calendario/feriados", HolidaysEndpoints);
app.use("/v1/portugal/distritos", DistrictsEndpoints);
app.use("/v1/portugal/concelhos", CitiesEndpoints);
// app.use("/v1/saude/instituicoes", InstSaudeEndpoints);
// ROUTE_PLACEHOLDER

/*
|------------------------------------------------------------
|     ___     _____      ___      
|    /   |   /  _  \    /   |     
|   / /| |   | | | |   / /| |     
|  / /_| |_  | | | |  / /_| |_     
|  \____  _| | |_| |  \___   _|     
|      |_|    \___/       |_|
|-------------------------------------------------------------
| Must always be the last route
*/

app.use("*", (req, res, next) => {
  const msg = `Route "${req.protocol}://${req.headers.host}${req.originalUrl}" not found.`;

  return serverUtils.sendErrorResponse(res, new RouteNotFoundError(msg));
});

/*
|------------------------------------------------------------
|   _____ ____  ____   ___  ____  ____
|  | ____|  _ \|  _ \ / _ \|  _ \/ ___|
|  |  _| | |_) | |_) | | | | |_) \___ \
|  | |___|  _ <|  _ <| |_| |  _ < ___) |
|  |_____|_| \_\_| \_\\___/|_| \_\____/
|------------------------------------------------------------
|
*/
app.use(serverUtils.catchAndParseErrors);

module.exports = app;
