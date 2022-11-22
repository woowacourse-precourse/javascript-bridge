const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = []; 
    for (let idx = 0; idx < size; idx++){
      const number = generateRandomNumber.generate();
      if (number === 1) {
        bridge.push("U");
        continue;
      }
      bridge.push("D");
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
