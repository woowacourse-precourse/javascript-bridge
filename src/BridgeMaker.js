const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let i = 0; i < size; i++) {
      bridge.push(generateRandomNumber() === "0" ? "D" : "U");
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
