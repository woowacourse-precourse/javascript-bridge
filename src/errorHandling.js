const { Console } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE } = require('./constant/error');
const {
  checkInputBridgeRange,
  checkNotNumbersInInput,
  isInputUpOrDown,
  isInputReOrQuit,
} = require('./utils/validate');

function validateBridgeSize(input) {
  try {
    if (!checkNotNumbersInInput(input))
      throw new Error(ERROR_MESSAGE.notNumber);
    if (!checkInputBridgeRange(input)) throw new Error(ERROR_MESSAGE.range);
  } catch (err) {
    Console.print(err.message);
    return true;
  }
}

function validateInputBridgeMoving(input) {
  try {
    if (!isInputUpOrDown(input)) throw new Error(ERROR_MESSAGE.moving);
  } catch (err) {
    Console.print(err.message);
    return true;
  }
}

function validateInputRestart(input) {
  try {
    if (!isInputReOrQuit(input)) throw new Error(ERROR_MESSAGE.restart);
  } catch (err) {
    Console.print(err.message);
    return true;
  }
}

module.exports = {
  validateBridgeSize,
  validateInputBridgeMoving,
  validateInputRestart,
};
