const { DIRECTION } = require('./Utils/Constants.js');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const safeBridgeList = [];
    for (let count = 0; count < size; count++) {
      const direction = generateRandomNumber();
      direction ? safeBridgeList.push(DIRECTION.UP) : safeBridgeList.push(DIRECTION.DOWN);
    }
    return safeBridgeList;
  },
};

module.exports = BridgeMaker;
