const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants');
const Validator = require('./Validator');

const InputView = {
  readBridgeSize(setUpGame) {
    Console.readLine(MESSAGE.bridgeSize, (bridgeSize) =>
      this.tryToSetUpGame(bridgeSize, setUpGame)
    );
  },

  tryToSetUpGame(bridgeSize, setUpGame) {
    try {
      Validator.validateBridgeSize(bridgeSize);
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
      Validator.validateDirection(direction);
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
      Validator.validateGameCommand(command);
      checkRetry(command);
    } catch (e) {
      Console.print(e);
      this.readGameCommand(checkRetry);
    }
  },
};

module.exports = InputView;
