const { Console } = require('@woowacourse/mission-utils');
const { GAME_MSG } = require('./constant');

const InputView = {
  readBridgeSize(size) {
    Console.readLine(GAME_MSG.ENTER_SIZE, size);
  },

  readMoving(move) {
    Console.readLine(GAME_MSG.ENTER_MOVE, move);
  },

  readGameCommand(input) {
    Console.readLine(GAME_MSG.ENTER_RETRY_OR_QUIT, input);
  },
};

module.exports = InputView;
