const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./Constant');

const InputView = {
  readBridgeSize() {
    return new Promise(resolve => {
      Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, size => {
        resolve(size);
      });
    });
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
