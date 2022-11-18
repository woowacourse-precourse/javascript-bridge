const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i++) {
      const randomNumber = generateRandomNumber();
      let direction;
      if (randomNumber === 0) direction = 'D';
      if (randomNumber === 1) direction = 'U';
      bridge.push(direction);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
