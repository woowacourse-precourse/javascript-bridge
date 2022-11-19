const { ERROR_MESSAGE, BRIDGE_VALUE } = require("../constants");
const AppError = require("../errors/AppError");

const isBridgeLengthValid = (value) => {
  if (isEmptyInput(value)) throw new AppError(ERROR_MESSAGE.EMPTY_ERROR);
  if (!isNumberType(value)) throw new AppError(ERROR_MESSAGE.TYPE_ERROR);
  if (!isRangeValid(value)) throw new AppError(ERROR_MESSAGE.RANGE_ERROR);
};

const isEmptyInput = (value) => !value;

const isNumberType = (value) => !Number.isNaN(Number(value));

const isRangeValid = (value) =>
  BRIDGE_VALUE.MIN <= value && value <= BRIDGE_VALUE.MAX;

module.exports = { isBridgeLengthValid };
