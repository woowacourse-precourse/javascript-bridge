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

  invalidMoveCommand() {}
  invalidRetryCommand() {}
}

module.exports = Validator;
