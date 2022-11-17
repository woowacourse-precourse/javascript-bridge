const { ERROR, BRIDGE } = require('../constants/Constants');

const BridgeLengthValidation = (length) => {
  if (isNaN(length)) throw new Error(`${ERROR.prefix} ${ERROR.isNaN}`);
  if (!validLength(length))
    throw new Error(`${ERROR.prefix} ${ERROR.bridgeLength}`);
};

const validLength = (length) => {
  return BRIDGE.min <= length && BRIDGE.max >= length;
};

module.exports = { BridgeLengthValidation };
