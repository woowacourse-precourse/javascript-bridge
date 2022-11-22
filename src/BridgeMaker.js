const Constants = require('./Constants');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const ONE = 1;
    const bridge = [];
    for (let i = 1; i <= size; i++) {
      const random = generateRandomNumber();
      random === ONE ? bridge.push(Constants.UP) : bridge.push(Constants.DOWN);
    }

    return bridge;
  },
};

module.exports = BridgeMaker;
