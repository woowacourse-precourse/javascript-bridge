const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let BRIDGE = []
    for(let i = 0; i<size; i++){
      const number = generateRandomNumber();
      if (number == 1) {
        BRIDGE.push('U')
      } else {BRIDGE.push('D')}
    }
    return BRIDGE
  },
};

module.exports = BridgeMaker;
