const { MAP } = require('./constants');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return new Array(size).fill(true).map(() => {
      const number = generateRandomNumber();
      if (number === MAP.UP_SIDE_NUM) {
        return MAP.UP_SIDE_STR;
      }

      return MAP.DOWN_SIDE_STR;
    });
  },
};

module.exports = BridgeMaker;
