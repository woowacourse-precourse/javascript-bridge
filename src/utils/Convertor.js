const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { BRIDGE_MAKER } = require('../constants/values');

const Convertor = {
  convertStringToDecimalNumber(string) {
    return parseInt(string, 10);
  },

  convertRandomNumberToString() {
    const num = BridgeRandomNumberGenerator.generate();
    if (typeof num === 'string') {
      return num;
    }

    return BridgeRandomNumberGenerator.generate() === 1 ? BRIDGE_MAKER.ZERO : BRIDGE_MAKER.ONE;
  },
};

module.exports = Convertor;
