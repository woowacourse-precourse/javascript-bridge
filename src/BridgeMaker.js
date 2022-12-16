const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    let bridgeArr = [];
    for (let i = 0; i < size; i++) {
      let randomNumberBit = generateRandomNumber();
      let randomCharacterBit = String(randomNumberBit).replace('0', 'D').replace('1', 'U')
      bridgeArr.push(randomCharacterBit);
    }
    return bridgeArr
  },
};

module.exports = BridgeMaker;