const { Console } = require('@woowacourse/mission-utils');
const {
  validateBridgeSize,
  validateDirection,
  validateGameCommand,
} = require('./Validator');
const { MESSAGE } = require('./Constants');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize(startGame) {
    Console.readLine(MESSAGE.bridgeSize, (bridgeLength) =>
      this.tryToStartGame(bridgeLength, startGame)
    );
  },

  tryToStartGame(bridgeLength, startGame) {
    try {
      validateBridgeSize(bridgeLength);
      startGame(bridgeLength);
    } catch (e) {
      Console.print(e);
      this.readBridgeSize(startGame);
    }
  },

  readMoving(moveOne) {
    Console.readLine(MESSAGE.direction, (direction) =>
      this.tryToMoveOne(direction, moveOne)
    );
  },

  tryToMoveOne(direction, moveOne) {
    try {
      validateDirection(direction);
      moveOne(direction);
    } catch (e) {
      Console.print(e);
      this.readMoving(moveOne);
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
