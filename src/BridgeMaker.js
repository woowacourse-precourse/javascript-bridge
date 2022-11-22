const { COMMAND } = require('./constant/Constant');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array(Number(size))
      .fill('')
      .map(() => (Number(generateRandomNumber()) === 1 ? COMMAND.MOVING_UP : COMMAND.MOVING_DOWN));
  },
};

module.exports = BridgeMaker;
