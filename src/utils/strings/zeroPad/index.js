function zeroPad(num) {
  const n = Number(num);
  if (isNaN(n)) {
    throw new Error("You must provide a valid number!");
  }

  if (n > 9) {
    return `${n}`;
  } else {
    return `0${n}`;
  }
}

module.exports = zeroPad;
