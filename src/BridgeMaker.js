const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    const UP_OR_DOWN = {
      0: 'D',
      1: 'U'
    };

    for(let count=0;count<size;count++){
      bridge.push(UP_OR_DOWN[generateRandomNumber()]);
    }
    
    return bridge;
  }
};

module.exports = BridgeMaker;
