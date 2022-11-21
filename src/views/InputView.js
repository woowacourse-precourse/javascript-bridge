const { Console } = require('@woowacourse/mission-utils');
const GAME_MESSAGE = require('../utils/message');

const InputView = {
  readBridgeSize(handleMakeBridge) {
    Console.readLine(GAME_MESSAGE.askBridgeSize, handleMakeBridge);
  },

  readMoving(handleMoving) {
    Console.readLine(GAME_MESSAGE.askMoveDirection, handleMoving);
  },

  readGameCommand(handleCommand) {
    Console.readLine(GAME_MESSAGE.askGameCommand, handleCommand);
  },
};

module.exports = InputView;
