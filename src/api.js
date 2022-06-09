const express = require("express");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");

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
const LeapYearEndpoints = require("./api/calendar-leap-year/leap.routes");
const HolidaysEndpoints = require("./api/calendar-holidays/holidays.routes");
const DistrictsEndpoints = require("./api/pt-districts/districts.routes");
const CitiesEndpoints = require("./api/pt-cities/cities.routes");
// const InstSaudeEndpoints = require("./api/saude-instituicoes/instituicoes.routes");

// ROUTES
app.use("/v1/calendario/bissexto", LeapYearEndpoints);
app.use("/v1/calendario/feriados", HolidaysEndpoints);
app.use("/v1/portugal/distritos", DistrictsEndpoints);
app.use("/v1/portugal/concelhos", CitiesEndpoints);
// app.use("/v1/saude/instituicoes", InstSaudeEndpoints);

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

module.exports = app;
