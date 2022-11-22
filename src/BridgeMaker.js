const COMMAND = require('./constants/command');

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }).map(() =>
      generateRandomNumber() ? COMMAND.UP : COMMAND.DOWN
    );
  },
};

module.exports = BridgeMaker;
