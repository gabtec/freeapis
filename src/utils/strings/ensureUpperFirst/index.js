function capitalize(str) {
  const fisrtLetter = str.charAt(0);
  const rest = str.slice(1);

  return fisrtLetter.toUpperCase() + rest;
}

function ensureUpperFirst(str) {
  let parts = str.split(" ");
  parts = parts.map((it) => {
    return it.toLowerCase();
  });

  if (parts.length === 1 && parts[0].includes("-")) {
    const portions = parts[0].split("-");
    portions[2] = capitalize(portions[2]);
    parts[0] = portions.join("-");
  }
  return parts
    .map((it) => {
      return ["da", "de", "do", "dos"].includes(it) ? it : capitalize(it);
    })
    .join(" ");
}

module.exports = ensureUpperFirst;
