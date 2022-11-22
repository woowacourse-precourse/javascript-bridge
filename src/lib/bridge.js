const {
  RANDOM_UPPER_INCLUSIVE,
  RANDOM_LOWER_INCLUSIVE,
} = require("../BridgeRandomNumberGenerator");
const { FLAG } = require("./constants");

function getDirectionByNumber(number) {
  if (number === RANDOM_UPPER_INCLUSIVE) {
    return FLAG.UPPER;
  }

  if (number === RANDOM_LOWER_INCLUSIVE) {
    return FLAG.LOWER;
  }
}

module.exports = { getDirectionByNumber };
