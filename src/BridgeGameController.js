const { Console } = require('@woowacourse/mission-utils');
const { isWrongDirection, isCommandRetry } = require('./BridgeGame');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeParts = require('./BridgeParts');
const { generate } = require('./BridgeRandomNumberGenerator');
const {
  readMoving,
  repeatReadMoving,
  readGameCommand,
  readBridgeSize,
} = require('./InputView');
const { printResult, printMap, printStatistic } = require('./OutputView');

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
      BridgeGameController.showBridge(game);
      readGameCommand(game, BridgeGameController.checkRetry);
    } else if (game.isEndOfBridge()) BridgeGameController.quitBridgeGame(game);
    else if (BridgeGameController.canMoveNext(game)) {
      BridgeGameController.showBridge(game);
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
      } else {
        printResult();
        printStatistic(game);
        Console.close();
      }
    } catch (err) {
      Console.print(err);
      readGameCommand(game, BridgeGameController.checkRetry);
    }
  }

  static createMap(game) {
    const map = new BridgeParts();
    map.createMap(game);
    map.closeBridge();
    return map;
  }

  static showBridge(game) {
    const map = BridgeGameController.createMap(game);
    printMap(map.getUpperBridge(), map.getDownerBridge());
  }

  static quitBridgeGame(game) {
    printResult();
    BridgeGameController.showBridge(game);
    printStatistic(game);
    Console.close();
  }
}

module.exports = BridgeGameController;
