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
        const VALIDATION = this.validateMoving(move);
        resolve(VALIDATION);
      });
    });
  },

  validateMoving(move) {
    if (move === 'U' || move === 'D') return move;
    throw new Error(ERROR_MESSAGE.MOVE_ERROR);
  },

  readGameCommand() {
    return new Promise(resolve => {
      Console.readLine(INPUT_MESSAGE.READ_GAME_COMMAND, restart => {
        const VALIDATION = this.vadlidateGameCommand(restart);
        resolve(VALIDATION);
      });
    });
  },

  vadlidateGameCommand(restart) {
    if (restart === 'R' || restart === 'Q') return restart;
    throw new Error(ERROR_MESSAGE.RESTART_ERROR);
  },
};

module.exports = InputView;
