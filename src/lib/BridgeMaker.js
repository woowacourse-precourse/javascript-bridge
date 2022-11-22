const { MOVE_COMMAND } = require('../constants/Settings');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridgeShape = [];

    for (let index = 0; index < size; index++) {
      bridgeShape.push(this.getUpOrDown(generateRandomNumber()));
    }

    return [...bridgeShape];
  },

  getUpOrDown(number) {
    return Number(number) === 0 ? MOVE_COMMAND.down : MOVE_COMMAND.up;
  },
};

module.exports = BridgeMaker;
