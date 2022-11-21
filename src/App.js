const InputView = require('./InputView');
const OutputView = require('./OutputView');

const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./utils/BridgeRandomNumberGenerator');

class App {
  #tryCount = 1;

  #result = false;

  #addTryCount() {
    this.#tryCount += 1;
  }

  async play() {
    this.bridgeGame = new BridgeGame();
    await this.#createRandomBridge();
    await this.#inputMoveBlock();
  }

  async #createRandomBridge() {
    const size = await InputView.readBridgeSize();
    BridgeGame.validateSize(size);
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.bridgeGame.setRandomBridge(bridge);
  }

  async #inputMoveBlock() {
    const block = await InputView.readMoving();
    BridgeGame.validateBlock(block);
    this.bridgeGame.setUserBlock(block);
    const formattedBridges = this.bridgeGame.move();
    OutputView.printMap(formattedBridges);
    this.#handleFinish(formattedBridges);
  }

  #handleFinish(formattedBridges) {
    if (this.bridgeGame.isFail(formattedBridges)) this.#finishMoveBlock();
    else if (this.bridgeGame.isSuccess(formattedBridges)) OutputView.printResult();
    else {
      this.#addTryCount();
      this.#inputMoveBlock();
    }
  }

  async #finishMoveBlock() {
    console.log('hi');
  }
}

module.exports = App;
