const { ERROR, BRIDGE } = require('../constants/Constants');

const bridgeLengthValidation = (length) => {
  if (isNaN(length)) throw `${ERROR.prefix} ${ERROR.isNan}`;
  if (!validLength(length)) throw `${ERROR.prefix} ${ERROR.bridgeLength}`;
};

const validLength = (length) => {
  return BRIDGE.min <= length && BRIDGE.max >= length;
};

module.exports = { bridgeLengthValidation };
