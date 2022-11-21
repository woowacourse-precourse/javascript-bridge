const { BLANK_SPACE } = require("./constants");

module.exports = {
  generateColumnMap: {
    U: (matchSymbol) => [matchSymbol, BLANK_SPACE],
    D: (matchSymbol) => [BLANK_SPACE, matchSymbol],
  },
};
