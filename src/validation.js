const { ERROR_MESSAGE } = require('./constants');

function isNumber(number) {
  const notNumber = /[^0-9]/;
  return !notNumber.test(number);
}

function isOutOf3To20(number) {
  if (number < 3 || number > 20) return false;
  return true;
}

function isValidCommand(command, validCommand1, validCommand2) {
  if (validCommand1 === command || validCommand2 === command) {
    return true;
  }
  return false;
}

const validation = {
  bridgeLength(length) {
    if (!isNumber(length)) throw new Error(ERROR_MESSAGE.BRIDGE_LENGTH_NUMBER);
    if (!isOutOf3To20(length))
      throw new Error(ERROR_MESSAGE.BRIDGE_LENGTH_RANGE);
  },
  moveCommand(command, validCommand1, validCommand2) {
    if (!isValidCommand(command, validCommand1, validCommand2)) {
      throw new Error(ERROR_MESSAGE.MOVE_COMMAND);
    }
  },
  retryOrQuitCommand(command, validCommand1, validCommand2) {
    if (!isValidCommand(command, validCommand1, validCommand2)) {
      throw new Error(ERROR_MESSAGE.RETRY_OR_QUIT_COMMAND);
    }
  },
};

module.exports = validation;
