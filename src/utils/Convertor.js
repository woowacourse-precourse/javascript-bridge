const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

const Convertor = {
  convertStringToDecimalNumber(string) {
    return parseInt(string, 10);
  },

  convertRandomNumberToString() {
    const num = BridgeRandomNumberGenerator.generate();

    if (typeof num === 'string') {
      return num;
    }

    return BridgeRandomNumberGenerator.generate() === 1 ? '1' : '0';
  },
};

module.exports = Convertor;
