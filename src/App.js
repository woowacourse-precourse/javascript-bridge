/* eslint-disable class-methods-use-this */
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { validateReadBridgeSize, validateReadMoving, validateReadGameCommand } = require('./Validate');
const { generate } = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const { printMap, printResult } = require('./OutputView');

class App {
  #bridgeGame;

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.onReadBridgeSize.bind(this));
  }

  onReadBridgeSize(size) {
    validateReadBridgeSize(size);
    const bridge = BridgeMaker.makeBridge(size, generate);
    this.startGame(bridge);
  }

  startGame(bridge) {
    this.#bridgeGame = new BridgeGame(bridge);
    InputView.readMoving(this.onReadMoving.bind(this));
  }

  onReadMoving(moving) {
    validateReadMoving(moving);
    const isCorrect = this.#bridgeGame.move(moving);
    printMap(this.#bridgeGame.getMoveHistory(), isCorrect);
    if (!isCorrect) InputView.readGameCommand(this.onReadGameCommand.bind(this));
    if (this.#bridgeGame.isFinished()) {
      //다리 모두 건넘
      if (isCorrect) printResult(this.#bridgeGame.getTryNum(), this.#bridgeGame.getMoveHistory(), isCorrect);
      return;
    }
    if (isCorrect) InputView.readMoving(this.onReadMoving.bind(this));
  }
  onReadGameCommand(command) {
    validateReadGameCommand(command);
    this.#bridgeGame.retry();
  }
}

module.exports = App;
