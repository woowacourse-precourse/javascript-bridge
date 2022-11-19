const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { printMap, printResult } = require('./OutputView');

class BridgeGameController {
  static initBridge(size) {
    const bridge = BridgeMaker.makeBridge(size, generate);
    console.log(bridge);
    const game = new BridgeGame(bridge);
    return game;
  }

  static move(game, direction) {
    // needs: 다리 배열, 입력 방향 기록들
    game.move(direction);
    printMap(game);
    if (game.isSameDirection()) {
      return true;
    }
    return false;
  }

  static checkEndOfBridge(game) {
    if (game.isEndOfBridge()) {
      printResult(game);
      return true;
    }
    return false;
  }

  static canNotMove(game, direction) {
    if (BridgeGameController.move(game, direction) === false) return true;
    return false;
  }

  static canMoveNext(game) {
    if (BridgeGameController.checkEndOfBridge(game) === false) return true;
    return false;
  }
}

module.exports = BridgeGameController;
