const { ERROR_MESSAGE } = require('../Constants/Message');
const { INPUT_CHAR, INPUT_RETRY } = require('../Constants/InputValues');

/**
 * 다리 길이가 유효한지 판별하는 메서드
 */
function isCorrectBridgeSize(input) {
  const RegExp = /^[0-9]+$/;
  if (input < 3) throw new Error(ERROR_MESSAGE.biggerThanThree);
  if (!RegExp.test(input)) throw new Error(ERROR_MESSAGE.mustNumber);
  return false;
}

/**
 * 입력받은 값이 문자인지 판별하는 메서드
 */
function isCorrectCharactor(input) {
  const RegExp = /^[A-Z]{1}/;
  if (!RegExp.test(input)) throw new Error(ERROR_MESSAGE.mustCharactor);
  return false;
}

/**
 * 입력된 값이 유효한 움직임 값인지 판별하는 메서드
 */
function isCorrectMoveCommand(input) {
  if (!(input === INPUT_CHAR.up) && !(input === INPUT_CHAR.down)) throw new Error(ERROR_MESSAGE.wrongMove);
  return false;
}

/**
 * 입력된 값이 유효한 종료/재시작 값인지 판별하는 메서드
 */
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
