const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let dummy = []
    for(let i = 0; i<size; i++){
      const number = generateRandomNumber();
      if (number == 1) {
        dummy.push('U')
      } else {dummy.push('D')}
    }
    const BRIDGE = dummy
    return BRIDGE
  },
};

module.exports = BridgeMaker;
