const docsPathRef = require("./paths/docs.js");
const infosPathRef = require("./paths/infos.js");

const concelhoModelRef = require("./model/concelho.js");
const concelhosModelRef = require("./model/concelhos.js");
const concelhosPathRef = require("./paths/pt-concelhos.js");
const concelhoPathRef = require("./paths/pt-concelho-single.js");
const distritoModelRef = require("./model/distrito.js");
const distritosModelRef = require("./model/distritos.js");
const distritosPathRef = require("./paths/pt-distritos.js");
const distritoPathRef = require("./paths/pt-distrito-single.js");
const responseSuccessModelRef = require("./model/response-success.js");
const responseErrorModelRef = require("./model/response-error.js");
const feriadosPathRef = require("./paths/cal-bissexto.js");
const bissextoPathRef = require("./paths/cal-feriados.js");
const leapYearModelRef = require("./model/leap-year.js");
const hollidaysModelRef = require("./model/hollidays.js");

module.exports = {
  openapi: "3.0.3", // not API version, but api documentation specs version
  info: {
    title: "Gabtec's Free API's",
    description: "REST API with usefull stuffs", // SOS
    version: require("../package.json").version,
    // termsOfService: "http://swagger.io/terms", // SOS
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    }, // SOS
    contact: {
      name: "Gabtec, inc",
      url: "https://gabtec.blogs.sapo.pt",
    }, // SOS
    consumes: ["application/json"], // SOS
    produces: ["application/json"], // SOS
  },
  servers: [
    {
      url: "https://freeapis.gabtec.pt/v1",
      description: "production server",
    },
    {
      url: "http://localhost:4000/v1",
      description: "development server",
    },
  ], // SOS
  // security: {
  // // if I setup this, each path must also have a security object OR will not render
  //   name: "access_token",
  // },
  paths: {
    "/docs": docsPathRef,
    "/infos": infosPathRef,
    "/calendario/bissexto/{ano}": bissextoPathRef,
    "/calendario/feriados/{ano}": feriadosPathRef,
    "/portugal/distritos/{cod}": distritoPathRef,
    "/portugal/distritos/": distritosPathRef,
    "/portugal/concelhos/{cod}": concelhoPathRef,
    "/portugal/concelhos/": concelhosPathRef,
  },
  components: {
    schemas: {
      LeapYear: leapYearModelRef,
      Hollidays: hollidaysModelRef,
      Distrito: distritoModelRef,
      Distritos: distritosModelRef,
      Concelho: concelhoModelRef,
      Concelhos: concelhosModelRef,
      ResponseSuccess: responseSuccessModelRef,
      ResponseError: responseErrorModelRef,
    },
  },
};
