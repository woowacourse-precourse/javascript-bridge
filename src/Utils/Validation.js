const { ERROR_MESSAGE } = require('../Constants/Message');
const { INPUT_CHAR, INPUT_RETRY, INPUT_TYPE } = require('../Constants/InputValues');

function checkBridgeSize(input) {
  const RegExp = /^[0-9]*/;
  if (input === '0') throw new Error(ERROR_MESSAGE.noZero);
  if (!RegExp.test(input)) throw new Error(ERROR_MESSAGE.mustNumber);
}

function checkCorrectCharactor(input) {
  const RegExp = /^[A-Z]{1}/;
  if (!RegExp.test(input)) throw new Error(ERROR_MESSAGE.mustCharactor);
}

function checkCorrectCommand(input, type) {
  if (type === INPUT_TYPE.move) {
    if (!(input === INPUT_CHAR.up) || !(input === INPUT_CHAR.down)) throw new Error(ERROR_MESSAGE.wrongMove);
  }
  if (type === INPUT_TYPE.retry) {
    if (!(input === INPUT_RETRY.restart) || !(input === INPUT_RETRY.quit)) throw new Error(ERROR_MESSAGE.wrontCommand);
  }
}

module.exports = {
  checkBridgeSize,
  checkCorrectCharactor,
  checkCorrectCommand,
};
