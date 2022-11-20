const BridgeMaker = {
  UPPPER_RANDOM_NUMBER: 1,
  LOWER_RANDOM_NUMBER: 0,
  UPPER_BLOCK: 'U',
  LOWER_BLOCK: 'D',

  makeBridge(size, generateRandomNumber) {
    const bridge = [];

    for (let block = 0; block < size; block++) {
      const randomNumber = generateRandomNumber();
      if (randomNumber === BridgeMaker.LOWER_RANDOM_NUMBER) bridge[block] = BridgeMaker.LOWER_BLOCK;
      if (randomNumber === BridgeMaker.UPPPER_RANDOM_NUMBER)
        bridge[block] = BridgeMaker.UPPER_BLOCK;
    }

    return bridge;
  },
};

module.exports = BridgeMaker;
