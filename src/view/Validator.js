const { BRIDGE_GAME } = require('../constants/bridgeGameInfo');

const errorType = {
  empty: 'emptyInput',
  range: 'invalidRange',
  number: 'invalidNumber',
  move: 'invalidMoveInput',
  retry: 'invalidGameOverInput',
};

class Validator {
  checkBridgeSize(userInput) {
    this.emptyInput(userInput);
    this.outOfRange(userInput);
  }

  emptyInput(userInput) {
    if (!userInput || userInput === ' ') {
      throw errorType.empty;
    }
  }

  outOfRange(bridgeSize) {
    const { minSize, maxSize } = BRIDGE_GAME;
    if (bridgeSize < minSize || bridgeSize > maxSize) {
      throw errorType.range;
    }
  }

  invalidNumber(bridgeSize) {}

  invalidMoveCommand() {}
  invalidRetryCommand() {}
}

module.exports = Validator;
