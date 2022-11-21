const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../BridgeGame');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');
const { GameState } = require('../constants/Constant');
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
    this.#bridge = BridgeMaker.makeBridge(
      +InputView.readBridgeSize(),
      BridgeRandomNumberGenerator.generate,
    );
    this.#bridgeGame = new BridgeGame(this.#bridge);
    this.playBridgeGame();
  }

  playBridgeGame() {
    this.#bridgeGame.move(InputView.readMoving());
    OutputView.printMap(this.#bridge, this.#bridgeGame.getMovingLog());
    this.checkBridgeGame();
  }

  checkBridgeGame() {
    const gameState = this.#bridgeGame.getGameState();
    if (gameState === GameState.PLAYING) this.playBridgeGame();
    if (gameState === GameState.GAME_OVER) this.requestRetryBridgeGame();
    if (gameState === GameState.VICTORY) this.endBridgeGame();
  }

  requestRetryBridgeGame() {
    const command = InputView.readGameCommand();
    if (command === 'R') this.retryBridgeGame();
    if (command === 'Q') this.endBridgeGame();
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
