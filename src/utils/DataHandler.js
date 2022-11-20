const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { BRIDGE_MAKER, BRIDGE_GAME } = require('../constants/values');

const DataHandler = {
  convertStringToDecimalNumber(string) {
    return parseInt(string, 10);
  },

  makeZeroOrOne() {
    const num = BridgeRandomNumberGenerator.generate();
    if (typeof num === 'string') {
      return num;
    }

    return BridgeRandomNumberGenerator.generate() === 1 ? BRIDGE_MAKER.ZERO : BRIDGE_MAKER.ONE;
  },

  getSelectedIndex(direction) {
    return direction === BRIDGE_GAME.INPUT_U ? BRIDGE_GAME.UP_BRIDGE : BRIDGE_GAME.DOWN_BRIDGE;
  },

  getUnselectedIndex(direction) {
    return direction === BRIDGE_GAME.INPUT_U ? BRIDGE_GAME.DOWN_BRIDGE : BRIDGE_GAME.UP_BRIDGE;
  },
};

module.exports = DataHandler;
