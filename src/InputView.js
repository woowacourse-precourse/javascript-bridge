const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants');
const {
  validateBridgeSize,
  validateDirection,
  validateGameCommand,
} = require('./Validator');

const InputView = {
  readBridgeSize(setUpGame) {
    Console.readLine(MESSAGE.bridgeSize, (bridgeSize) =>
      this.tryToSetUpGame(bridgeSize, setUpGame)
    );
  },

  tryToSetUpGame(bridgeSize, setUpGame) {
    try {
      validateBridgeSize(bridgeSize);
      setUpGame(bridgeSize);
    } catch (e) {
      Console.print(e);
      this.readBridgeSize(setUpGame);
    }
  },

  readMoving(moveOneStep) {
    Console.readLine(MESSAGE.direction, (direction) =>
      this.tryToMoveOneStep(direction, moveOneStep)
    );
  },

  tryToMoveOneStep(direction, moveOneStep) {
    try {
      validateDirection(direction);
      moveOneStep(direction);
    } catch (e) {
      Console.print(e);
      this.readMoving(moveOneStep);
    }
  },

  readGameCommand(checkRetry) {
    Console.readLine(MESSAGE.retry, (command) =>
      this.tryToCheckRetry(command, checkRetry)
    );
  },

  tryToCheckRetry(command, checkRetry) {
    try {
      validateGameCommand(command);
      checkRetry(command);
    } catch (e) {
      Console.print(e);
      this.readGameCommand(checkRetry);
    }
  },
};

module.exports = InputView;
