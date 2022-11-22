const { U, D } = require("./constants");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => {
      const randomNumber = generateRandomNumber();
      const direction = BridgeMaker.getDirection(randomNumber);
      return direction;
    });
  },

  getDirection(randomNumber) {
    return parseInt(randomNumber) ? U : D;
  },
};

module.exports = BridgeMaker;
