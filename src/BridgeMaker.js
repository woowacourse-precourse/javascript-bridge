const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let numberBridge = [];
    for (let i = 0; i < size; i++) {
      numberBridge.push(generateRandomNumber());
    }
    return this.changeBridgeElements(numberBridge);
  },

  changeBridgeElements(numberBridge) {
    let directionBridge = [];
    for (let i = 0; i < numberBridge.length; i++) {
      if (numberBridge[i] === 1) directionBridge.push("U");
      if (numberBridge[i] === 0) directionBridge.push("D");
    }
    return directionBridge;
  },
};

module.exports = BridgeMaker;
