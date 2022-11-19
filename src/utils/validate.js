const { ERROR_MESSAGE } = require("../constants");

const isBridgeLengthValid = (value) => {
  if (!isNumberType(value)) throw Error(ERROR_MESSAGE.TYPE_ERROR);
};

const isNumberType = (value) => !Number.isNaN(Number(value));

module.exports = { isBridgeLengthValid };
