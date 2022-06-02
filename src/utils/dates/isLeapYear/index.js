/**
 * Converts a string in yyyy-mm-dd format to a JS Date object in UTC (not locale dependent)
 * @param {number | string} year - the year to search for
 * @returns {Boolean}
 */
function isLeapYear(year) {
  const y = Number(year);

  if (isNaN(y)) throw new Error("Deve indicar um ano válido!");

  if (y % 400 === 0) {
    return true;
  }

  if (y % 4 === 0 && y % 100 !== 0) {
    return true;
  }

  return false;
}

module.exports = isLeapYear;
