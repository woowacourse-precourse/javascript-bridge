const { Console } = require('@woowacourse/mission-utils');
const { GAME } = require('./phrases');
const Validation = require('./Validation');

const InputView = {
  readBridgeSize(process) {
    Console.readLine(GAME.BRIDGE_SIZE, (input) => {
      Validation.bridgeSize(input);
      process.makeBridge(input);
    });
  },

  readMoving(process) {
    Console.readLine(GAME.MOVING, (input) => {
      Validation.moving(input);
      process.move(input);
    });
  },

  readGameCommand(process) {
    Console.readLine(GAME.RETRY, (input) => {
      Validation.gameCommand(input);
      process.retryOrQuit(input);
    });
  },
};

module.exports = InputView;
