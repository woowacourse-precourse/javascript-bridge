const { Console } = require('@woowacourse/mission-utils');
const { isWrongDirection, isCommandRetry } = require('./BridgeGame');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeMap = require('./BridgeMap');
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
      readGameCommand(game, BridgeGameController.queryRetry);
    } else if (game.isEndOfBridge()) BridgeGameController.showResult(game);
    else if (BridgeGameController.canMoveNext(game)) {
      BridgeGameController.showBridge(game);
      repeatReadMoving(game, BridgeGameController.moveNext);
    }
  }

  static queryRetry(game, command) {
    try {
      this.checkRetry(game, command);
    } catch (err) {
      Console.print(err);
      readGameCommand(game, BridgeGameController.checkRetry);
    }
  }

  static checkRetry(game, command) {
    if (isCommandRetry(command)) {
      game.retry();
      readMoving(game, BridgeGameController.moveNext);
    } else BridgeGameController.quit(game);
  }

  static canMoveNext(game) {
    if (!game.isEndOfBridge()) return true;
    return false;
  }

  static showBridge(game) {
    const map = new BridgeMap();
    map.create(game);
    printMap(map.getUpperBridge(), map.getDownerBridge());
  }

  static showResult(game) {
    printResult();
    BridgeGameController.showBridge(game);
    printStatistic(game);
    Console.close();
  }

  static quit(game) {
    printResult();
    printStatistic(game);
    Console.close();
  }
}

module.exports = BridgeGameController;
