const { makeBridge } = require('./BridgeMaker.js');
const { generate } = require('./BridgeRandomNumberGenerator.js');
const { ERROR_MSG } = require('./constants/message.js');
const { BRIDGE_SIZE_MIN_RANGE, BRIDGE_SIZE_MAX_RANGE } = require('./constants/condition.js');

class BridgeGame {
  #bridge;

  buildBridge(size) {
    this.validateSize(size);
  }

  move() {}

  retry() {}

  validateSize(size) {
    if (!size) throw new Error(ERROR_MSG.emptyInput);

    if (!this.hasOnlyNumber(size)) throw new Error(ERROR_MSG.invalidInputType);

    if (this.isStartedZero(size)) throw new Error(ERROR_MSG.isStartedZero);

    if (!this.isValideBridgeSizeRange(size)) throw new Error(ERROR_MSG.invalidInputRange);
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

  isValideBridgeSizeRange(size) {
    return BRIDGE_SIZE_MIN_RANGE <= size && size <= BRIDGE_SIZE_MAX_RANGE;
  }
}

module.exports = BridgeGame;
