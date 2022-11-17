const BridgeDirection = require('./domain/bridge/BridgeDirection');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => BridgeDirection.generate(generateRandomNumber));
  },
};

module.exports = BridgeMaker;
