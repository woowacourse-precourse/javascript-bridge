const { ERROR_MESSAGE } = require('../Constants/Message');
const { INPUT_CHAR, INPUT_RETRY } = require('../Constants/InputValues');

function isCorrectBridgeSize(input) {
  const RegExp = /^[0-9]+$/;
  if (input < 3) throw new Error(ERROR_MESSAGE.biggerThanThree);
  if (!RegExp.test(input)) throw new Error(ERROR_MESSAGE.mustNumber);
  return false;
}

function isCorrectCharactor(input) {
  const RegExp = /^[A-Z]{1}/;
  if (!RegExp.test(input)) throw new Error(ERROR_MESSAGE.mustCharactor);
  return false;
}

function isCorrectMoveCommand(input) {
  if (!(input === INPUT_CHAR.up) && !(input === INPUT_CHAR.down)) throw new Error(ERROR_MESSAGE.wrongMove);
  return false;
}

function isCorrectOptionCommand(input) {
  if (!(input === INPUT_RETRY.restart) && !(input === INPUT_RETRY.quit)) throw new Error(ERROR_MESSAGE.wrontCommand);
  return false;
}

module.exports = {
  isCorrectBridgeSize,
  isCorrectCharactor,
  isCorrectMoveCommand,
  isCorrectOptionCommand,
};
