const { Console } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE } = require('../Constants/Message');
const { INPUT_CHAR, INPUT_RETRY } = require('../Constants/InputValues');

function isCorrectBridgeSize(input) {
  const RegExp = /^[0-9]+$/;
  if (input === 0 || input < 0) {
    Console.print(ERROR_MESSAGE.noZero);
    return true;
  }
  if (!RegExp.test(input)) {
    Console.print(ERROR_MESSAGE.mustNumber);
    return true;
  }
  return false;
}

function isCorrectCharactor(input) {
  const RegExp = /^[A-Z]{1}/;
  if (!RegExp.test(input)) {
    Console.print(ERROR_MESSAGE.mustCharactor);
    return true;
  }
  return false;
}

function isCorrectMoveCommand(input) {
  if (!(input === INPUT_CHAR.up) && !(input === INPUT_CHAR.down)) {
    Console.print(ERROR_MESSAGE.wrongMove);
    return true;
  }
  return false;
}

function isCorrectOptionCommand(input) {
  if (!(input === INPUT_RETRY.restart) && !(input === INPUT_RETRY.quit)) {
    Console.print(ERROR_MESSAGE.wrontCommand);
    return true;
  }
  return false;
}

module.exports = {
  isCorrectBridgeSize,
  isCorrectCharactor,
  isCorrectMoveCommand,
  isCorrectOptionCommand,
};
