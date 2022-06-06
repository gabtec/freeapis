const dfnsSub = require("date-fns/subDays");
const dfnsAdd = require("date-fns/addDays");
// const { zeroPad } = require("../../utils");
const { zeroPad } = require("../../utils");
// const utilsDates = require("../../utils/index.js").dates;

// 1º domingo após 1ª lua cheia após equinócio primavera
// sempre entre 22-03 e 25-04
function getEaster(year) {
  // from https://pt.wikipedia.org/wiki/C%C3%A1lculo_da_P%C3%A1scoa
  // Algoritmo de Gauss

  var X = 0;
  var Y = 0;

  if (year >= 1582 && year <= 1699) {
    X = 22;
    Y = 2;
  }
  if (year >= 1700 && year <= 1799) {
    X = 23;
    Y = 3;
  }
  if (year >= 1800 && year <= 1899) {
    X = 23;
    Y = 4;
  }
  if (year >= 1900 && year <= 2099) {
    X = 24;
    Y = 5;
  }
  if (year >= 2100 && year <= 2199) {
    X = 24;
    Y = 6;
  }
  if (year >= 2200 && year <= 2299) {
    X = 25;
    Y = 7;
  }

  var a = year % 19;
  var b = year % 4;
  var c = year % 7;
  var d = (19 * a + X) % 30;
  var e = (2 * b + 4 * c + 6 * d + Y) % 7;

  var day;
  var month;
  if (d + e < 10) {
    day = d + e + 22;
    month = 3;
  } else {
    day = d + e - 9;
    month = 4;
  }
  //excepcao 1 - 26 of april 2076
  if (day == 26 && month == 4) {
    day = 19;
  }

  //excepcao 2 - 25 of april 2049
  if (day == 25 && month == 4 && d == 28 && a > 10) {
    day = 18;
  }

  // return new Date(year, month, day, 0, 0, 0, 0);
  return `${year}-${zeroPad(month)}-${zeroPad(day)}`;
}

// 2 dias antes da páscoa
function getGoodFriday(year) {
  const easter = getEaster(year).split("-");
  const result = dfnsSub(
    new Date(Date.UTC(easter[0], easter[1] - 1, easter[2])),
    2
  );

  return result.toISOString().split("T")[0];
}

// 47 dias antes da páscoa
// sempre 3ªf
function getCarnival(year) {
  const easter = getEaster(year).split("-");
  const result = dfnsSub(
    new Date(Date.UTC(easter[0], easter[1] - 1, easter[2])),
    47
  );

  return result.toISOString().split("T")[0];
}

// 60 dias após a páscoa.
// sempre 5ªf
// sempre entre 21-05 e 24-06
function getCorpusChristi(year) {
  const easter = getEaster(year).split("-");
  const result = dfnsAdd(
    new Date(Date.UTC(easter[0], easter[1] - 1, easter[2])),
    60
  );

  return result.toISOString().split("T")[0];
}

module.exports = {
  getEaster,
  getCarnival,
  getGoodFriday,
  getCorpusChristi,
};
