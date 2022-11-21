const OutputView = require('./Views/OutputView');
const InputView = require('./Views/InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class BridgeGameController {
  #bridgeInfo;

  constructor() {
    this.#bridgeInfo = {
      userMove: [],
      moveCount: 0,
    };
    const bridgeGame = new BridgeGame();
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
    this.#bridgeInfo.moveCount++;
    this.#bridgeInfo.userMove.push(moveDirection);
    console.log(this.#bridgeInfo);
    // this.bridgeGame.move();
    // this.this.moveAgainOrReGame(this.isSafeBridge());
  }

  moveAgainOrReGame() {}
}

module.exports = BridgeGameController;
