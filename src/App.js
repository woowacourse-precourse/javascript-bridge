const {Console} = require('@woowacourse/mission-utils');

const BridgeGame = require('./BridgeGame');
const SimplePromise = require('./SimplePromise');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  #bridgeGame = null;

  play() {
    new SimplePromise()
      .then((resolve) => (this.#bridgeGame === null ? this.#init(resolve) : resolve()))
      .then((resolve) => this.#moveBridge(resolve))
      .then((resolve, isSuccess) =>
        isSuccess ? this.#endGame() : InputView.readGameCommand(resolve)
      )
      .then((resolve, command) => {
        this.#select(command);
      });
  }

  #init(parentResolve) {
    new SimplePromise()
      .then((resolve) => InputView.readBridgeSize(resolve))
      .then((resolve, bridgeSize) => resolve(() => this.#initBridgeGame(bridgeSize)))
      .then(() => parentResolve());
  }

  #initBridgeGame(bridgeSize) {
    const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    this.#bridgeGame = new BridgeGame(bridge);
  }

  #select(command) {
    if (command === 'Q') return this.#endGame();
    if (command === 'R') {
      this.#retryGame();
      this.play();
    }
  }

  #endGame() {
    OutputView.printResult(this.#bridgeGame);
    Console.close();
  }

  #retryGame() {
    this.#bridgeGame.retry();
  }

  #moveBridge(callback) {
    InputView.readMoving((direction) => {
      this.#bridgeGame.move(direction);
      OutputView.printMap(this.#bridgeGame);

      if (this.#bridgeGame.isMovable()) return this.#moveBridge(callback);

      callback(this.#bridgeGame.isSuccess());
    });
  }
}

module.exports = App;
