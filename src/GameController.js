const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { COMMAND } = require('./Constants/constant');
const { printMap, printResult } = require('./OutputView');
const Validator = require('./Validator');

class BridgeGameController {
  static initBridgeGame(size) {
    const bridge = BridgeMaker.makeBridge(size, generate);
    console.log(bridge);
    const game = new BridgeGame(bridge);
    return game;
  }

  static selectWrongDirection(game, direction) {
    if (!BridgeGameController.moveNext(game, direction)) return true;
    return false;
  }

  static isWrongDirection(game) {
    if (!game.isSameDirection()) return true;
    return false;
  }

  static moveNext(game, direction) {
    game.move(direction);
    printMap(game);
    if (game.isSameDirection()) {
      return true;
    }
    return false;
  }

  static canMoveNext(game) {
    if (!game.isEndOfBridge()) {
      return true;
    }
    return false;
  }

  static checkEndOfBridge(game) {
    if (game.isEndOfBridge()) {
      // printResult(game);
      return true;
    }
    return false;
  }

  static isCommandRetry(command) {
    Validator.checkCorrectCommand(command);
    if (command === COMMAND.retry) return true;
    return false;
  }
}

module.exports = BridgeGameController;
