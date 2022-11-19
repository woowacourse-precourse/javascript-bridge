const { BRIDGE_GAME } = require('../constants/bridgeGameInfo');

const ERROR_TYPE = Object.freeze({
  empty: 'emptyInput',
  range: 'invalidRange',
  number: 'invalidNumber',
  move: 'invalidMoveInput',
  retry: 'invalidGameOverInput',
});

class Validator {
  checkBridgeSize(userInput) {
    this.emptyInput(userInput);
    this.outOfRange(userInput);
    this.invalidNumber(userInput);
  }

  emptyInput(userInput) {
    if (!userInput || userInput === ' ') {
      throw ERROR_TYPE.empty;
    }
  }

  outOfRange(bridgeSize) {
    const { minSize, maxSize } = BRIDGE_GAME;
    if (bridgeSize < minSize || bridgeSize > maxSize) {
      throw ERROR_TYPE.range;
    }
  }

  invalidNumber(bridgeSize) {
    const isNotNumber = Number.isNaN(Number(bridgeSize));
    if (isNotNumber || bridgeSize.includes('e') || bridgeSize.includes('.')) {
      throw ERROR_TYPE.number;
    }
  }

  checkMoveCommand(userInput) {
    this.emptyInput(userInput);
    this.invalidMoveCommand(userInput);
  }

  invalidMoveCommand(moveCommand) {
    const regExp = /^U{1}$|^D{1}$/;
    const isValidCommand = regExp.test(moveCommand);
    if (!isValidCommand) {
      throw ERROR_TYPE.move;
    }
  }

  checkRetryCommand(userInput) {
    this.invalidRetryCommand(userInput);
  }

  invalidRetryCommand(retryCommand) {
    const regExp = /^R{1}$|^Q{1}$/;
    const isValidCommand = regExp.test(retryCommand);
    if (!isValidCommand) {
      throw ERROR_TYPE.retry;
    }
  }
}

module.exports = Validator;
