const EXCEPTION_MESSAGE = require('./consts/Exception');
const GAME = require('./consts/Game');
const Exception = require('./Exception');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    this.handleBridgeSizeException(size);
  },
  handleBridgeSizeException(size) {
    switch (false) {
      case this.isInteger(size):
        Exception.throwError(EXCEPTION_MESSAGE.BRIDGE_SIZE.INTEGER);
      case this.isInRange(size):
        Exception.throwError(EXCEPTION_MESSAGE.BRIDGE_SIZE.RANGE);
    }
  },
  isInteger(size) {
    return Number.isInteger(size);
  },
  isInRange(size) {
    if (GAME.BRIDGE_SIZE_START <= size && size <= GAME.BRIDGE_SIZE_END) {
      return true;
    }

    return false;
  },
};

module.exports = BridgeMaker;
