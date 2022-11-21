const OutputView = require('./Views/OutputView');
const InputView = require('./Views/InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class BridgeGameController {
  #bridgeInfo = {
    userMove: [],
    moveCount: 0,
  };

  constructor() {
    const bridgeGame = new BridgeGame();
  }

  start() {
    this.OutputView.printStartMessage();
    this.inputView.readBridgeSize(this.makeBridgeAndMove.bind(this));
  }

  makeBridgeAndMove(size) {
    this.#bridgeInfo.bridge = Object.freeze(
      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator)
    );
    this.inputView.readMoving(this.GameResult.bind(this.moveBridge(this)));
  }

  moveBridge(moveDirection) {
    this.#bridgeInfo.userMove.push(moveDirection);
    this.bridgeGame();
    this.this.moveAgainOrReGame(this.isSafeBridge());
  }

  moveAgainOrReGame() {}
}

module.exports = BridgeGameController;
