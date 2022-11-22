const { Console } = require('@woowacourse/mission-utils');
const { GAME } = require('./phrases');
const Validation = require('./Validation');

const InputView = {
  readBridgeSize(process) {
    Console.readLine(GAME.BRIDGE_SIZE, (input) => {
      try {
        Validation.bridgeSize(input);
        process.makeBridge(input);
      } catch (error) {
        Console.print(error.message);
        this.readBridgeSize(process);
      }
    });
  },

  readMoving(process) {
    Console.readLine(GAME.MOVING, (input) => {
      try {
        Validation.moving(input);
        process.move(input);
      } catch (error) {
        Console.print(error.message);
        this.readMoving(process);
      }
    });
  },

  readGameCommand(process) {
    Console.readLine(GAME.RETRY, (input) => {
      try {
        Validation.gameCommand(input);
        process.retryOrQuit(input);
      } catch (error) {
        Console.print(error.message);
        this.readGameCommand(process);
      }
    });
  },
};

module.exports = InputView;
