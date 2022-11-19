const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE, ERROR_MESSAGE } = require('./Constant');

const InputView = {
  readBridgeSize() {
    return new Promise(resolve => {
      Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, size => {
        const VALIDATION = this.validateBridgeSize(size);
        resolve(VALIDATION);
      });
    });
  },

  validateBridgeSize(size) {
    if (size >= 3 && size <= 20) return size;
    throw new Error(ERROR_MESSAGE.SIZE_ERROR);
  },

  readMoving() {
    return new Promise(resolve => {
      Console.readLine(INPUT_MESSAGE.READ_MOVE, move => {
        resolve(move);
      });
    });
  },

  readGameCommand() {
    return new Promise(resolve => {
      Console.readLine(INPUT_MESSAGE.READ_GAME_COMMAND, game => {
        resolve(game);
      });
    });
  },
};

module.exports = InputView;
