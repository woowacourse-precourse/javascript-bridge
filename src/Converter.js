const { BRIDGE_MSG } = require('./Constant');

const Converter = {
  convertToUpDown(number) {
    return +number === 1 ? BRIDGE_MSG.upward : BRIDGE_MSG.downward;
  },

  convertToBridgeMap() {},
};

module.exports = Converter;
