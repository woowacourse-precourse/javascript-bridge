const { BRIDGE_INFO } = require("./constants/constants");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridgeArr = [];
    for (let number = 0; number < size; number++) {
      const randomNumber = Number(generateRandomNumber());
      bridgeArr.push(randomNumber ? BRIDGE_INFO.UP_STR : BRIDGE_INFO.DOWN_STR);
    }
    return bridgeArr;
  },
};

module.exports = BridgeMaker;
