const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let i = 0; i < size; i++) {
      const number = String(generateRandomNumber());

      if (number === "1") {
        bridge.push("U");
      } else if (number === "0") {
        bridge.push("D");
      }
    }

    console.log(bridge);
    return bridge;
  },
};

module.exports = BridgeMaker;
