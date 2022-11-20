const { Console } = require('@woowacourse/mission-utils');
const {
  initBridgeGame,
  selectWrongDirection,
  canMoveNext,
  isCommandRetry,
  isWrongDirection,
} = require('./GameController');
const {
  readMoving,
  readBridgeSize,
  repeatReadMoving,
  readGameCommand,
} = require('./InputView');
const { printResult, printMap } = require('./OutputView');

class BridgeGameController {
  static readSize(size) {
    try {
      const game = initBridgeGame(size);
      readMoving(game, BridgeGameController.moveNext);
    } catch (err) {
      Console.print(err);
      readBridgeSize(BridgeGameController.readSize);
    }
  }

  static moveNext(game, direction) {
    try {
      game.move(direction);
      if (game.isEndOfBridge()) {
        printResult(game);
      } else if (isWrongDirection(game)) {
        printMap(game);
        readGameCommand(game, BridgeGameController.retryDoing);
      } else if (canMoveNext(game)) {
        printMap(game);
        repeatReadMoving(game, BridgeGameController.moveNext);
      }
    } catch (err) {
      Console.print(err);
      repeatReadMoving(game, BridgeGameController.moveNext);
    }
  }

  static retryDoing(game, command) {
    try {
      if (isCommandRetry(command)) {
        game.retry();
        readMoving(game, BridgeGameController.moveNext);
      } else printResult(game);
    } catch (err) {
      Console.print(err);
      readGameCommand(game, BridgeGameController.retryDoing);
    }
  }
}

module.exports = BridgeGameController;
