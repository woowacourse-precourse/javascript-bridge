const { Console } = require('@woowacourse/mission-utils');
const { isWrongDirection, isCommandRetry } = require('./BridgeGame');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const {
  readMoving,
  repeatReadMoving,
  readGameCommand,
  readBridgeSize,
} = require('./InputView');
const { printResult, printMap } = require('./OutputView');

class BridgeGameController {
  static readSize(size) {
    try {
      const game = BridgeGameController.initBridgeGame(size);
      readMoving(game, BridgeGameController.moveNext);
    } catch (err) {
      Console.print(err);
      readBridgeSize(BridgeGameController.readSize);
    }
  }

  static initBridgeGame(size) {
    const bridge = BridgeMaker.makeBridge(size, generate);
    console.log(bridge);
    const game = new BridgeGame(bridge);
    return game;
  }

  static moveNext(game, direction) {
    try {
      game.move(direction);
      BridgeGameController.checkGameProcess(game);
    } catch (err) {
      Console.print(err);
      repeatReadMoving(game, BridgeGameController.moveNext);
    }
  }

  static checkGameProcess(game) {
    if (isWrongDirection(game)) {
      printMap(game);
      readGameCommand(game, BridgeGameController.checkRetry);
    } else if (game.isEndOfBridge()) {
      printResult(game);
    } else if (BridgeGameController.canMoveNext(game)) {
      printMap(game);
      repeatReadMoving(game, BridgeGameController.moveNext);
    }
  }

  static canMoveNext(game) {
    if (!game.isEndOfBridge()) return true;

    return false;
  }

  static checkRetry(game, command) {
    try {
      if (isCommandRetry(command)) {
        game.retry();
        readMoving(game, BridgeGameController.moveNext);
      } else printResult(game);
    } catch (err) {
      Console.print(err);
      readGameCommand(game, BridgeGameController.checkRetry);
    }
  }
}

module.exports = BridgeGameController;
