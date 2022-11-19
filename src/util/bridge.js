const BRIDGE_PRINT = {
  empty: " ",
  correct: "O",
  incorrect: "X",
};

const BRIDGE_PATH = {
  up: "U",
  down: "D",
};

const BRIDGE_DELIMETER = {
  wrapper: (content) => `[ ${content} ]`,
  wrapperln: (content) => `[ ${content} ]\n`,
  delimeter: " | ",
};

module.exports = { BRIDGE_PRINT, BRIDGE_PATH, BRIDGE_DELIMETER };
