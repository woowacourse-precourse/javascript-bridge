const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridgeByNumber = [];
    for (let i = 0; i < size; i++) {
      bridgeByNumber.push(generateRandomNumber());
    }
    return this.changeBridgeElements(bridgeByNumber);
  },

  changeBridgeElements(bridgeByNumber) {
    let bridgeByDirection = [];
    for (let i = 0; i < bridgeByNumber.length; i++) {
      if (bridgeByNumber[i] === 1) bridgeByDirection.push("U");
      if (bridgeByNumber[i] === 0) bridgeByDirection.push("D");
    }
    return bridgeByDirection;
  },
};

module.exports = BridgeMaker;
