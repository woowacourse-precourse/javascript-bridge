const { Console } = require('@woowacourse/mission-utils');

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
    if (this.bridgeGame.isFail(formattedBridges)) this.#finishMoveBlock(formattedBridges);
    else if (this.bridgeGame.isSuccess(formattedBridges)) {
      this.#result = true;
      OutputView.printResult(this.#tryCount, this.#result, formattedBridges);
      Console.close();
    } else this.#inputMoveBlock(formattedBridges);
  }

  async #finishMoveBlock(formattedBridges) {
    const command = await InputView.readGameCommand();
    BridgeGame.validateCommand(command);
    if (command === 'Q') {
      OutputView.printResult(this.#tryCount, this.#result, formattedBridges);
      Console.close();
    } else {
      this.#addTryCount();
      this.bridgeGame.retry();
      this.#inputMoveBlock();
    }
  }
}

module.exports = App;
