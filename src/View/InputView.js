const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../Constants/message');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.bridge_size, callback);
  },

  readMoving(game, callback) {
    Console.readLine(INPUT_MESSAGE.move, (direction) =>
      callback(game, direction)
    );
  },

  readGameCommand(game, callback) {
    Console.readLine(INPUT_MESSAGE.retry, (command) => callback(game, command));
  },

  repeatReadMoving(game, callback) {
    InputView.readMoving(game, callback);
  },

  repeatReadCommand(game, callback) {
    InputView.readGameCommand(game, callback);
  },
};

module.exports = InputView;
