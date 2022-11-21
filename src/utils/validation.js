const OutputView = require('../view/OutputView');
const { ERROR_IS_NUMBER_NAN, ERROR_IS_NUMBER_IN_RANGE } = require('./constant');

const isNumberNaN = (num) => {
  if (Number.isNaN(num)) {
    OutputView.print(ERROR_IS_NUMBER_NAN);
    throw new Error(ERROR_IS_NUMBER_NAN);
  }
};
const isNumberInRange = (num) => {
  if (num < 3 || num > 20) {
    OutputView.print(ERROR_IS_NUMBER_IN_RANGE);
    throw new Error(ERROR_IS_NUMBER_IN_RANGE);
  }
};
const isBridgeSizeValid = (number) => {
  const num = Number(number);
  isNumberNaN(num);
  isNumberInRange(num);
};
const isUserMovingInputValid = (input) => {
  if (input !== 'U' && input !== 'D') {
    throw new Error('[ERROR] 올바른 명령어를 입력하세요.');
  }
};
const isGameCommandValid = (input) => {
  if (input !== 'R' && input !== 'Q') {
    throw new Error('[ERROR] 올바른 명령어를 입력하세요.');
  }
};
module.exports = { isBridgeSizeValid, isUserMovingInputValid, isGameCommandValid };
