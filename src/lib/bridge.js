const {
  RANDOM_UPPER_INCLUSIVE,
  RANDOM_LOWER_INCLUSIVE,
} = require("../BridgeRandomNumberGenerator");
const { FLAG } = require("./constants");

const UPPER = 0;
const LOWER = 1;

const buildMap = {
  upper(bridgeMap, mark) {
    bridgeMap[UPPER].push(`[ ${mark} ]`);
    bridgeMap[LOWER].push("[   ]");

    return bridgeMap;
  },

  lower(bridgeMap, mark) {
    bridgeMap[UPPER].push("[   ]");
    bridgeMap[LOWER].push(`[ ${mark} ]`);

    return bridgeMap;
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

function formatMap(bridgeMap) {
  return bridgeMap.map((section) => section.join("").replaceAll("][", "|"));
}

module.exports = { getDirectionByNumber, buildMap, formatMap };
