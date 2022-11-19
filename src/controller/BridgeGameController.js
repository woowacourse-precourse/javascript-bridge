const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../BridgeGame');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');
const { GameState } = require('../constants/Constant');
const Validator = require('../utils/Validator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class BridgeGameController {
  #bridge;
  #bridgeGame;

  start() {
    OutputView.printIntro();
    this.initBridgeGame();
  }

  initBridgeGame() {
    try {
      const bridgeSize = InputView.readBridgeSize();
      Validator.validateBridgeSize(bridgeSize);
      this.#bridge = BridgeMaker.makeBridge(+bridgeSize, BridgeRandomNumberGenerator.generate);
      this.#bridgeGame = new BridgeGame(this.#bridge);
      this.playBridgeGame();
    } catch (err) {
      Console.print(err.message);
      if (err instanceof TypeError || err instanceof RangeError) this.initBridgeGame();
    }
  }

  playBridgeGame() {
    try {
      const direction = InputView.readMoving();
      Validator.validateMoving(direction);
      this.#bridgeGame.move(direction);
      OutputView.printMap(this.#bridge, this.#bridgeGame.getMovingLog());
      this.checkBridgeGame();
    } catch (err) {
      Console.print(err.message);
      if (err instanceof RangeError) this.playBridgeGame();
    }
  }

  checkBridgeGame() {
    const gameState = this.#bridgeGame.getGameState();
    if (gameState === GameState.PLAYING) this.playBridgeGame();
    if (gameState === GameState.GAME_OVER) this.requestRetryBridgeGame();
    if (gameState === GameState.VICTORY) this.endBridgeGame();
  }

  requestRetryBridgeGame() {
    try {
      const command = InputView.readGameCommand();
      Validator.validateGameCommand(command);
      if (command === 'R') this.retryBridgeGame();
      if (command === 'Q') this.endBridgeGame();
    } catch (err) {
      Console.print(err.message);
      if (err instanceof RangeError) this.requestRetryBridgeGame();
    }
  }

  retryBridgeGame() {
    this.#bridgeGame.retry();
    this.playBridgeGame();
  }

  endBridgeGame() {
    OutputView.printResult(
      this.#bridge,
      this.#bridgeGame.getMovingLog(),
      this.#bridgeGame.getTryCount(),
    );
    Console.close();
  }
}

module.exports = BridgeGameController;
