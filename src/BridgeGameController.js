const OutputView = require('./Views/OutputView');
const InputView = require('./Views/InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class BridgeGameController {
  #bridgeInfo = {
    userMove: [],
  };

  constructor() {
    const outputView = new OutputView();
    const inputView = new InputView();
  }

  start() {
    this.OutputView.printStartMessage();
    this.inputView.readBridgeSize(this.moveBridge.bind(this));
  }

  moveBridge(size) {
    this.#bridgeInfo.bridge = Object.freeze(
      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator)
    );
    this.inputView.readMoving(this.GameResult.bind(this.gameResult(this)));
  }

  gameResult(move) {
    this.#bridgeInfo.userMove.push(move);
  }
}

module.exports = BridgeGameController;
