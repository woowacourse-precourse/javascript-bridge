const { ERROR_MESSAGE, BRIDGE_VALUE } = require("../constants");

const isBridgeLengthValid = (value) => {
  if (!isNumberType(value)) throw Error(ERROR_MESSAGE.TYPE_ERROR);
  if (!isRangeValid(value)) throw Error(ERROR_MESSAGE.RANGE_ERROR);
};

const isNumberType = (value) => !Number.isNaN(Number(value));

const isRangeValid = (value) =>
  BRIDGE_VALUE.MIN <= value && value <= BRIDGE_VALUE.MAX;

module.exports = { isBridgeLengthValid };
