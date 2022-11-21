const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constants');
const Validator = require('./Validator');

const InputView = {
  readBridgeSize(setBridge) {
    Console.readLine(MESSAGE.bridgeSize, (bridgeSize) =>
      this.tryToSetBridge(bridgeSize, setBridge)
    );
  },

  tryToSetBridge(bridgeSize, setBridge) {
    try {
      Validator.validateBridgeSize(bridgeSize);
      setBridge(Number(bridgeSize));
    } catch (e) {
      Console.print(e);
      this.readBridgeSize(setBridge);
    }
  },

  readMoving(move) {
    Console.readLine(MESSAGE.direction, (direction) =>
      this.tryToMove(direction, move)
    );
  },

  tryToMove(direction, move) {
    try {
      Validator.validateDirection(direction);
      move(direction);
    } catch (e) {
      Console.print(e);
      this.readMoving(move);
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
