const BridgeMaker = require("../BridgeMaker");
const Generator = require("../BridgeRandomNumberGenerator");
const InputView = require("../console/InputView");

class InputPrinter {
  #bridgeGame;

  constructor(birdgeGame) {
    this.#bridgeGame = birdgeGame;
  }

  insertBridgeSize() {
    const bridgeSetter = (size) => {
      const bridge = BridgeMaker.makeBridge(size, Generator.generate);
      this.#bridgeGame.getBridge().setOriginalBridge(bridge);
    };
    const nextCallback = this.selectBridgeDirection.bind(this);
    const errorCallback = this.insertBridgeSize.bind(this);

    InputView.readBridgeSize(bridgeSetter, nextCallback, errorCallback);
  }

  selectBridgeDirection() {
    const moveCallback = (direction) => {
      this.#bridgeGame.move(direction);
      this.#bridgeGame.getView().printBridge();
    };
    const nextCallback = () => this.#bridgeGame.continue();
    const errorCallback = this.selectBridgeDirection.bind(this);

    InputView.readMoving(moveCallback, nextCallback, errorCallback);
  }

  selectRetry() {
    const restartCallback = this.#bridgeGame.retry.bind(this.#bridgeGame);
    const errorCallback = this.selectRetry.bind(this);
    const quitCallback = this.#bridgeGame.endGame.bind(this.#bridgeGame);

    InputView.readGameCommand(restartCallback, quitCallback, errorCallback);
  }
}
module.exports = InputPrinter;
