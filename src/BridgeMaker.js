const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridgeByNumber = [];
    for (let i = 0; i < size; i++) {
      bridgeByNumber.push(generateRandomNumber());
    }
  },
};

module.exports = BridgeMaker;
