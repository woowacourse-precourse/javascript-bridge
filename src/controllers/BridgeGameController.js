const { Console } = require('@woowacourse/mission-utils');

const { GAME_RULE } = require('../constants');
const BridgeGame = require('../models/BridgeGame');
const GameCommand = require('../models/command/GameCommand');
const MovingCommand = require('../models/command/MovingCommand');
const SizeCommand = require('../models/command/SizeCommand');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BridgeGameController {
  #game;

  play() {
    this.#game = new BridgeGame();
    this.#game.start();
    InputView.readBridgeSize(this.#onBridgeSizeSubmit.bind(this));
  }

  #onBridgeSizeSubmit(command) {
    try {
      const sizeCommand = new SizeCommand(command);
      this.#game.setBridge(+sizeCommand.getCommand());
      InputView.readMoving(this.#onMovingSubmit.bind(this));
    } catch (e) {
      OutputView.printError(e);
      InputView.readBridgeSize(this.#onBridgeSizeSubmit.bind(this));
    }
  }

  #onMovingSubmit(command) {
    try {
      const movingCommand = new MovingCommand(command);
      const isCrossed = this.#game.move(movingCommand.getCommand());
      const bridgeMap = this.#game.getMap();

      OutputView.printMap(bridgeMap);

      if (!isCrossed) {
        InputView.readGameCommand(this.#onGameCommandSubmit.bind(this));
        return;
      }
      if (this.#game.isWin()) {
        this.#runQuit();
        return;
      }

      InputView.readMoving(this.#onMovingSubmit.bind(this));
    } catch (e) {
      OutputView.printError(e);
      InputView.readMoving(this.#onMovingSubmit.bind(this));
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
      OutputView.printError(e);
      InputView.readGameCommand(this.#onGameCommandSubmit.bind(this));
    }
  }

  #runRetry() {
    this.#game.retry();
    InputView.readMoving(this.#onMovingSubmit.bind(this));
  }

  #runQuit() {
    const { bridgeMap, isWin, tryCount } = this.#game.quit();
    OutputView.printResult(bridgeMap, isWin, tryCount);
    Console.close();
  }
}

module.exports = BridgeGameController;
