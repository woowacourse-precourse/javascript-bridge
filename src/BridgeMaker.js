const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];

    for (let idx = 0; idx < size; idx++) {
      const randomNumber = Number(generateRandomNumber());
      randomNumber === 0 ? bridge.push('D') : bridge.push('U');;
    }

    return bridge;
  }
};

module.exports = BridgeMaker;
