const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for(let i = 0; i < size; i++) {
      bridge.push(String(generateRandomNumber()) === "1" ? "U" : "D");
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
