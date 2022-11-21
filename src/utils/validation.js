const OutputView = require('../view/OutputView');
const { ERROR_MESSAGE } = require('./constant');

const isNumberNaN = (num) => {
  if (Number.isNaN(num)) {
    OutputView.print(ERROR_MESSAGE.IS_NUMBER_NAN);
    throw new Error(ERROR_MESSAGE.IS_NUMBER_NAN);
  }
};
const isNumberInRange = (num) => {
  if (num < 3 || num > 20) {
    OutputView.print(ERROR_MESSAGE.IS_NUMBER_IN_RANGE);
    throw new Error(ERROR_MESSAGE.IS_NUMBER_IN_RANGE);
  }
};
const isBridgeSizeValid = (number) => {
  const num = Number(number);
  isNumberNaN(num);
  isNumberInRange(num);
};
const isUserMovingInputValid = (input) => {
  if (input !== 'U' && input !== 'D') {
    throw new Error(ERROR_MESSAGE.IS_MOVING_COMMAND_VALID);
  }
};
const isGameCommandValid = (input) => {
  if (input !== 'R' && input !== 'Q') {
    throw new Error(ERROR_MESSAGE.IS_GAME_COMMAND_VALID);
  }
};
module.exports = { isBridgeSizeValid, isUserMovingInputValid, isGameCommandValid };
