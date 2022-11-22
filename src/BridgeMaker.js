const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

const BridgeMaker = {
  MOVE_UP: "U",
  MOVE_DOWN: "D",

  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let i = 0; i < size; ++i) {
      const randomNumber = generateRandomNumber();
      if (randomNumber == 0) bridge.push(this.MOVE_DOWN);
      if (randomNumber == 1) bridge.push(this.MOVE_UP);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
