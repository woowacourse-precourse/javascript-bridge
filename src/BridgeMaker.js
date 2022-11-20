const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let i = 0; i < size; ++i) {
      const randomNumber = generateRandomNumber();
      if (randomNumber == 0) bridge.push("D");
      if (randomNumber == 1) bridge.push("U");
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
