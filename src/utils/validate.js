const {
  ERROR_MESSAGE,
  BRIDGE_VALUE,
  MOVE_VALUE,
  RESTART_VALUE,
} = require("../constants");
const AppError = require("../errors/AppError");

const isBridgeLengthValid = (value) => {
  if (isEmptyInput(value)) throw new AppError(ERROR_MESSAGE.EMPTY_ERROR);
  if (!isNumberType(value)) throw new AppError(ERROR_MESSAGE.TYPE_ERROR);
  if (!isRangeValid(value)) throw new AppError(ERROR_MESSAGE.RANGE_ERROR);
};

const isMoveValid = (value) => {
  if (isEmptyInput(value)) throw new AppError(ERROR_MESSAGE.EMPTY_ERROR);
  if (!isAlphabetValid(value, MOVE_VALUE.UP, MOVE_VALUE.DOWN))
    throw new AppError(
      ERROR_MESSAGE.ALPHABET_ERROR(MOVE_VALUE.UP, MOVE_VALUE.DOWN)
    );
};

const isRestartValid = (value) => {
  if (isEmptyInput(value)) throw new AppError(ERROR_MESSAGE.EMPTY_ERROR);
  if (!isAlphabetValid(value, RESTART_VALUE.RESTART, RESTART_VALUE.QUIT))
    throw new AppError(
      ERROR_MESSAGE.ALPHABET_ERROR(RESTART_VALUE.RESTART, RESTART_VALUE.QUIT)
    );
};

const isEmptyInput = (value) => !value;

const isNumberType = (value) => !Number.isNaN(Number(value));

const isRangeValid = (value) =>
  BRIDGE_VALUE.MIN <= value && value <= BRIDGE_VALUE.MAX;

const isAlphabetValid = (value, option1, option2) =>
  value === option1 || value === option2;

module.exports = { isBridgeLengthValid, isMoveValid, isRestartValid };
