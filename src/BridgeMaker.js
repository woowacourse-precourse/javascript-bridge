const { BRIDGE } = require('./utils/constants');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const pattern = [];
    while (pattern.length < size) {
      const randomNumber = generateRandomNumber();
      pattern.push(BRIDGE[randomNumber]);
    }
    return pattern;
  },
};

module.exports = BridgeMaker;
