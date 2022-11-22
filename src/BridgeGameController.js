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
const { printResult, printMap } = require('./OutputView');

class BridgeGameController {
  static initGame(size) {
    try {
      const game = BridgeGameController.#createGame(size);
      readMoving(game, BridgeGameController.#moveNext);
    } catch (err) {
      Console.print(err.message);
      readBridgeSize(BridgeGameController.initGame);
    }
  }

  static #createGame(size) {
    const bridge = BridgeMaker.makeBridge(size, generate);
    return new BridgeGame(bridge);
  }

  static #moveNext(game, direction) {
    try {
      game.move(direction);
      BridgeGameController.#checkGameProcess(game, direction);
    } catch (err) {
      Console.print(err.message);
      repeatReadMoving(game, BridgeGameController.#moveNext);
    }
  }

  static #checkGameProcess(game, direction) {
    if (isWrongDirection(game, direction)) {
      BridgeGameController.#showBridge(game);
      readGameCommand(game, BridgeGameController.#queryRetry);
    } else if (game.isEndOfBridge()) BridgeGameController.#showResult(game);
    else {
      BridgeGameController.#showBridge(game);
      repeatReadMoving(game, BridgeGameController.#moveNext);
    }
  }

  static #queryRetry(game, command) {
    try {
      BridgeGameController.#checkRetry(game, command);
    } catch (err) {
      Console.print(err.message);
      readGameCommand(game, BridgeGameController.#queryRetry);
    }
  }

  static #checkRetry(game, command) {
    if (isCommandRetry(command)) {
      game.retry();
      readMoving(game, BridgeGameController.#moveNext);
    } else BridgeGameController.#quit(game);
  }

  static #showBridge(game) {
    const map = new BridgeMap();
    map.create(game);
    const bridge = map.getBridge();
    printMap(bridge);
  }

  static #showResult(game) {
    const map = new BridgeMap();
    map.create(game);
    const bridge = map.getBridge();
    printMap(bridge);
    printResult(game, bridge);
    Console.close();
  }

  static #quit(game) {
    const map = new BridgeMap();
    map.create(game);
    const bridge = map.getBridge();
    printResult(game, bridge);
    Console.close();
  }
}

module.exports = BridgeGameController;
