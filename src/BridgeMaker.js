const { SIGN } = require("./Constants");
const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array(size)
      .fill()
      .map(() => {
        const number = generateRandomNumber();
        return number === 1 ? SIGN.UP_DIRECTION_SIGN : SIGN.DOWN_DIRECTION_SIGN;
      });
  },
};

module.exports = BridgeMaker;
