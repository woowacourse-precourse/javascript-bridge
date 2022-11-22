const { DIRECTION_KEY } = require("./constants/rule");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return new Array(size).fill("").map(() => {
      const randomNum = generateRandomNumber();

      if (randomNum === 0) return DIRECTION_KEY.DOWN;

      return DIRECTION_KEY.UP;
    });
  },
};

module.exports = BridgeMaker;
