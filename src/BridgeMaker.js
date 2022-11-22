const { BRIDGE_MAKER } = require('./constants/Settings');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => {
      return generateRandomNumber() === BRIDGE_MAKER.one ? BRIDGE_MAKER.up : BRIDGE_MAKER.down;
    });
  },
};

module.exports = BridgeMaker;
