const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const sample = [];
    for (let i = 0; i < size; i++) {
      const randNumber = generateRandomNumber();
      if (Number(randNumber)) {
        sample.push('U');
        continue
      }
      sample.push('D');
    }
    return sample;
  },
}

module.exports = BridgeMaker;
