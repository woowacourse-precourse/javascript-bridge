const ConstValue = require('./ConstValue');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    this.handleBridgeLengthInputException(size);
    let bridge = [];
    let bridgeShape = [];
    for (let i = 0; i < size; i++) {
      const number = generateRandomNumber();
      bridge.push(number);
    }

    bridgeShape = this.changeToUD(size, bridge);

    return bridgeShape;
  },

  changeToUD(size, bridge) {
    let UDBridge = [];
    for (let i = 0; i < size; i++) {
      if (Number(bridge[i]) === 0) {
        UDBridge.push('D');
      } else {
        UDBridge.push('U');
      }
    }

    return UDBridge;
  },
  handleBridgeLengthInputException(length) {
    if (this.checkIsNaN(length)) {
      throw new Error(ConstValue.BRIDGE_LENGTH_INPUT_ERROR_MESSAGE.NOT_A_NUMBER_EXCEPTION);
    }

    if (this.checkNotInRange(length)) {
      throw new Error(ConstValue.BRIDGE_LENGTH_INPUT_ERROR_MESSAGE.NOT_IN_RANGE_EXCEPTION);
    }
  },

  checkIsNaN(length) {
    if (isNaN(length)) {
      return true;
    }

    return false;
  },

  checkNotInRange(length) {
    if (length < ConstValue.MIN_BRIDGE_LENGTH || length > ConstValue.MAX_BRIDGE_LENGTH) {
      return true;
    }

    return false;
  },
};

module.exports = BridgeMaker;
