const bridgeGenerateCodes = require('./util/bridgeGenerateCodes');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const results = [];
    for (let i = 0; i < size; i++) {
      results.push(bridgeGenerateCodes[generateRandomNumber()]);
    }
    return results;
  },
};

module.exports = BridgeMaker;
