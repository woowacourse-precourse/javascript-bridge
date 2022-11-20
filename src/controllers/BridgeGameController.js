const { Console } = require('@woowacourse/mission-utils');

const { GAME_RULE } = require('../constants');

const BridgeGame = require('../models/BridgeGame');
const { SizeCommand, MovingCommand, GameCommand } = require('../models/command');

const { readBridgeSize, readMoving, readGameCommand } = require('../views/InputView');
const { printMap, printResult, printError } = require('../views/OutputView');

class BridgeGameController {
  #game;

  play() {
    this.#game = new BridgeGame();
    this.#game.start();
    readBridgeSize(this.#onBridgeSizeSubmit.bind(this));
  }

  #onBridgeSizeSubmit(command) {
    try {
      const sizeCommand = new SizeCommand(command);
      this.#game.setBridge(+sizeCommand.getCommand());
      readMoving(this.#onMovingSubmit.bind(this));
    } catch (e) {
      BridgeGameController.#runError(e, readBridgeSize, this.#onBridgeSizeSubmit.bind(this));
    }
  }

  #onMovingSubmit(command) {
    try {
      const movingCommand = new MovingCommand(command);
      const isCrossed = this.#game.move(movingCommand.getCommand());
      const bridgeMap = this.#game.getMap();

      printMap(bridgeMap);

      if (!isCrossed) {
        readGameCommand(this.#onGameCommandSubmit.bind(this));
        return;
      }
      if (this.#game.isWin()) {
        this.#runQuit();
        return;
      }

      readMoving(this.#onMovingSubmit.bind(this));
    } catch (e) {
      BridgeGameController.#runError(e, readMoving, this.#onMovingSubmit.bind(this));
    }
  }

  #onGameCommandSubmit(command) {
    try {
      const gameCommand = new GameCommand(command);
      if (gameCommand.getCommand() === GAME_RULE.RETRY) {
        this.#runRetry();
      }
      if (gameCommand.getCommand() === GAME_RULE.QUIT) {
        this.#runQuit();
      }
    } catch (e) {
      BridgeGameController.#runError(e, readGameCommand, this.#onGameCommandSubmit.bind(this));
    }
  }

  #runRetry() {
    this.#game.retry();
    readMoving(this.#onMovingSubmit.bind(this));
  }

  #runQuit() {
    const { bridgeMap, isWin, tryCount } = this.#game.quit();
    printResult(bridgeMap, isWin, tryCount);
    Console.close();
  }

  static #runError(message, readLine, callback) {
    printError(message);
    readLine(callback);
  }
}

module.exports = BridgeGameController;
