const { COMMAND } = require('./Constants.js');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const safeBridgeList = [];
    for (let count = 0; count < size; count++) {
      const direction = generateRandomNumber();
      direction ? safeBridgeList.push(COMMAND.UP) : safeBridgeList.push(COMMAND.DOWN);
    }
    return safeBridgeList;
  },
};

module.exports = BridgeMaker;
