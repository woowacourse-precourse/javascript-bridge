const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i++) {
      bridge.push(generateRandomNumber());
    }
    bridge.map((el, index) => {
      if (el === 0) {
        bridge.splice(index, 1, "D");
      } else {
        bridge.splice(index, 1, "U");
      }
    });
    return bridge;
  },
};

module.exports = BridgeMaker;
