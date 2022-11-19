const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const COMMAND = require('./Constants/contant');
const { printMap, printResult } = require('./OutputView');
const Validator = require('./Validator');

class BridgeGameController {
  static initBridgeGame(length) {
    const bridge = BridgeMaker.makeBridge(length, generate);
    console.log(bridge);
    const game = new BridgeGame(bridge);
    return game;
  }

  static move(game, direction) {
    game.move(direction);
    printMap(game);
    if (game.isSameDirection()) {
      return true;
    }
    return false;
  }

  static selectWrongDirection(game, direction) {
    if (!BridgeGameController.move(game, direction)) return true;
    return false;
  }

  static canMoveNext(game) {
    if (!BridgeGameController.checkEndOfBridge(game)) return true;
    return false;
  }

  static checkEndOfBridge(game) {
    if (game.isEndOfBridge()) {
      printResult(game);
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
