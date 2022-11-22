const {
  RANDOM_UPPER_INCLUSIVE,
  RANDOM_LOWER_INCLUSIVE,
} = require("../BridgeRandomNumberGenerator");
const { FLAG } = require("./constants");

const UPPER = 0;
const LOWER = 1;

const buildMap = {
  upper(bridgeMap, mark) {
    bridgeMap[UPPER] += `[ ${mark} ]`;
    bridgeMap[LOWER] += "[   ]";

    return bridgeMap.map((section) => section.replaceAll("][", "|"));
  },

  lower(bridgeMap, mark) {
    bridgeMap[UPPER] += "[   ]";
    bridgeMap[LOWER] += `[ ${mark} ]`;

    return bridgeMap.map((section) => section.replaceAll("][", "|"));
  },
};

function getDirectionByNumber(number) {
  if (number === RANDOM_UPPER_INCLUSIVE) {
    return FLAG.UPPER;
  }

  if (number === RANDOM_LOWER_INCLUSIVE) {
    return FLAG.LOWER;
  }
}

module.exports = { getDirectionByNumber, buildMap };
