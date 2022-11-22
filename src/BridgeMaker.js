const BridgeMaker = {
  NUMBER_DOWN: '0',
  NUMBER_UP: '1',
  INITIAL_DOWN: 'D',
  INITIAL_UP: 'U',

  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 0; i < size; i++) {
      const randomNumber = generateRandomNumber().toString();
      let direction;
      if (randomNumber === this.NUMBER_DOWN) direction = this.INITIAL_DOWN;
      if (randomNumber === this.NUMBER_UP) direction = this.INITIAL_UP;
      bridge.push(direction);
    }
    return bridge;
  },
};

module.exports = BridgeMaker;
