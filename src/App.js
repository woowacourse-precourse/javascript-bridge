const BridgeGame = require('./BridgeGame.js');
const InputView = require('./InputView.js');
const OutputView = require('./OutputView.js');
const { makeBridge } = require('./BridgeMaker.js');
const { generate } = require('./BridgeRandomNumberGenerator.js');
const { COMMAND } = require('./constructor.js');
class App {
  #game

  constructor() {
    this.#game = new BridgeGame();
  }

  async initBridge() {
    const bridgeSize = await InputView.readBridgeSize();
    const bridge = makeBridge(bridgeSize, generate);
    return bridge;
  }

  async checkRetry() {
    const retryGame = await InputView.readGameCommand();
    return retryGame === COMMAND.RETRY;
  }

  async crossingBridge() {
    const movement = await InputView.readMoving();
    const result = this.#game.move(movement);
    return result;
  }

  retryGame() {
    this.#game.retry();
    return this.runGame();
  }

  async runGame() {
    const { isCorrect, isEnd, count, map } = await this.crossingBridge();
    await OutputView.printMap(map);

    if (isCorrect) {
      return isEnd ? OutputView.printResult(map, count, isCorrect) : this.runGame();
    }
    const isRetry = await this.checkRetry();
    return isRetry ? this.retryGame() : OutputView.printResult(map, count, isCorrect);
  }

  play() {
    (async() => {
        const bridge = await this.initBridge();
        this.#game.setBridge(bridge);
        await this.runGame();
    })();
  }
}

module.exports = App;
