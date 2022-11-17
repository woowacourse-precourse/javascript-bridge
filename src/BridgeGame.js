const { makeBridge } = require('./BridgeMaker.js');
const { generate } = require('./BridgeRandomNumberGenerator.js');
const { ERROR_MSG } = require('./constants/message.js');

class BridgeGame {
  #bridge;

  buildBridge(size) {
    this.validateSize(size);
  }

  move() {}

  retry() {}

  validateSize(size) {
    if (this.isEmpty(size)) {
      throw new Error(ERROR_MSG.emptyInput);
    }

    if (!this.hasOnlyNumber(size)) {
      throw new Error(ERROR_MSG.invalidInputType);
    }

    if (this.isStartedZero(size)) {
      throw new Error(ERROR_MSG.isStartedZero);
    }
  }

  isEmpty(size) {
    return !size.length;
  }

  hasOnlyNumber(size) {
    return size
      .split('')
      .map((eachLetter) => parseInt(eachLetter, 10))
      .every((number) => Number.isInteger(number));
  }

  isStartedZero(size) {
    return size.startsWith('0');
  }
}

module.exports = BridgeGame;
