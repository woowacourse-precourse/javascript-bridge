const { COMMAND } = require('./constant/Constant');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array(size)
      .fill('')
      .map(() => (generateRandomNumber() === 1 ? COMMAND.MOVING_UP : COMMAND.MOVING_DOWN));
  },
};

module.exports = BridgeMaker;
