const { printGameStartMessage } = require('../ui/OutputView');
const { readBridgeSize, readMoving, readGameCommand } = require('../ui/InputView');
const BridgeGame = require('./BridgeGame');

class BridgeGameProcessor {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  start() {
    this.gameStartProcess();
  }

  gameStartProcess() {
    printGameStartMessage();
    this.makeBridgeProcess();
  }

  makeBridgeProcess() {
    readBridgeSize(this.#bridgeGame.makeBridge.bind(this.#bridgeGame), this.moveProcess.bind(this));
  }

  moveProcess() {
    readMoving(this.#bridgeGame.move.bind(this.#bridgeGame), this.retryOrQuitProcess.bind(this));
  }

  retryOrQuitProcess() {
    this.#bridgeGame.printMap();
    if (this.#bridgeGame.isFail()) {
      readGameCommand(this.retryProcess.bind(this), this.gameTerminateProcess.bind(this));
    } else if (this.#bridgeGame.isClear()) {
      this.gameTerminateProcess();
    } else {
      this.moveProcess();
    }
  }

  retryProcess() {
    this.#bridgeGame.retry();
    this.moveProcess();
  }

  // 게임 종료
  gameTerminateProcess() {
    this.#bridgeGame.printResult();
  }
}

module.exports = { BridgeGameProcessor };
