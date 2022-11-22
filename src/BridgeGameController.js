const OutputView = require('./Views/OutputView');
const InputView = require('./Views/InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { RESULT } = require('./utils/constants');

class BridgeGameController {
  #bridgeInfo = {
    bridge: [],
    userMove: [],
    tryCount: 1,
  };

  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  start() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.makeBridgeAndMove.bind(this));
  }

  makeBridgeAndMove(size) {
    this.#bridgeInfo.bridge = Object.freeze(
      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)
    );
    InputView.readMoving(this.moveBridge.bind(this));
  }

  moveBridge(moveDirection) {
    this.bridgeGame.move(this.#bridgeInfo, moveDirection);
    OutputView.printMap(this.bridgeGame.getBridgeMap());
    this.gameResult();
  }

  gameResult() {
    this.bridgeGame.setResult(
      this.#bridgeInfo.userMove,
      this.#bridgeInfo.bridge
    );
    if (this.isBridgeOver()) this.gameOver();
    else this.keepGoing();
  }

  isBridgeOver() {
    if (this.#bridgeInfo.userMove.length === this.#bridgeInfo.bridge.length)
      return true;
    return false;
  }

  keepGoing() {
    if (this.bridgeGame.getResult() === RESULT.FAILURE) {
      InputView.readGameCommand(
        this.retryGame.bind(this),
        this.gameOver.bind(this)
      );
      return;
    }
    InputView.readMoving(this.moveBridge.bind(this));
  }

  gameOver() {
    OutputView.printResult(
      this.bridgeGame.getBridgeMap(),
      this.#bridgeInfo.tryCount,
      this.bridgeGame.getResult()
    );
  }

  retryGame() {
    this.bridgeGame.retry(this.#bridgeInfo);
    InputView.readMoving(this.moveBridge.bind(this));
  }
}

module.exports = BridgeGameController;
