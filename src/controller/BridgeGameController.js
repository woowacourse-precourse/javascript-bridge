const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../BridgeGame');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');
const { GAME_STATE } = require('../constants/Constant');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class BridgeGameController {
  #bridgeGame;

  start() {
    OutputView.printIntro();
    this.initBridgeGame();
  }

  initBridgeGame() {
    InputView.readBridgeSize(size => {
      this.#bridgeGame = new BridgeGame(
        BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate),
      );
      this.playBridgeGame();
    });
  }

  playBridgeGame() {
    InputView.readMoving(direction => {
      this.#bridgeGame.move(direction);
      OutputView.printMap(this.#bridgeGame.getMovingLog());
      this.checkBridgeGame();
    });
  }

  checkBridgeGame() {
    const gameState = this.#bridgeGame.getGameState();
    if (gameState === GAME_STATE.PLAYING) this.playBridgeGame();
    if (gameState === GAME_STATE.GAME_OVER) this.requestRetryBridgeGame();
    if (gameState === GAME_STATE.VICTORY) this.endBridgeGame();
  }

  requestRetryBridgeGame() {
    InputView.readGameCommand(command => {
      if (command === 'R') this.retryBridgeGame();
      if (command === 'Q') this.endBridgeGame();
    });
  }

  retryBridgeGame() {
    this.#bridgeGame.retry();
    this.playBridgeGame();
  }

  endBridgeGame() {
    OutputView.printResult(this.#bridgeGame.getMovingLog(), this.#bridgeGame.getTryCount());
    Console.close();
  }
}

module.exports = BridgeGameController;
