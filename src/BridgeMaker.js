const { BLOCK } = require('../src/Constant/value');

const BridgeMaker = {
  UPPPER_RANDOM_NUMBER: 1,
  LOWER_RANDOM_NUMBER: 0,

  makeBridge(size, generateRandomNumber) {
    const bridge = [];

    for (let block = 0; block < size; block++) {
      const randomNumber = generateRandomNumber();
      if (randomNumber === BridgeMaker.LOWER_RANDOM_NUMBER) bridge[block] = BLOCK.LOWER;
      if (randomNumber === BridgeMaker.UPPPER_RANDOM_NUMBER) bridge[block] = BLOCK.UPPER;
    }

    return bridge;
  },
};

module.exports = BridgeMaker;

